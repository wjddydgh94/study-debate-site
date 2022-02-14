import {
  commentApi,
  issueApi,
  registerCommentApi,
  voteAgreeApi,
  voteDisagreeApi,
} from "@/api/issue";
import {
  CommentsResponseType,
  IssueResponseType,
  RegisterCommentFormDataType,
} from "@/types/issues";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

interface UseIssuePropsType {
  issueId: number;
}

const useIssue = ({ issueId }: UseIssuePropsType) => {
  const [issue, setIssue] = useState<IssueResponseType | null>(null);
  const [comments, setComments] = useState<CommentsResponseType[] | null>(null);
  const hookForm = useForm({
    mode: "onBlur",
  });

  const calcAgreePercentage = useMemo(() => {
    const totalVote = issue ? issue.vote.agree + issue.vote.disagree : 0;
    const agreePercent = issue
      ? Math.round((issue.vote.agree / totalVote) * 100)
      : 0;
    return agreePercent;
  }, [issue]);

  const getIssue = async ({ issueId }: UseIssuePropsType) => {
    try {
      const res = await issueApi({ issueId });
      setIssue(res.data);
    } catch (e) {
      throw e;
    }
  };

  const handleAgreeButton = async () => {
    const prevAgree = issue ? issue.vote.agree : 0;
    const prevDisgree = issue ? issue.vote.disagree : 0;
    try {
      await voteAgreeApi({ issueId, prevAgree, prevDisgree });
    } catch (e) {
      throw e;
    }
  };

  const handleDisagreeButton = async () => {
    const prevAgree = issue ? issue.vote.agree : 0;
    const prevDisgree = issue ? issue.vote.disagree : 0;
    try {
      await voteDisagreeApi({ issueId, prevAgree, prevDisgree });
    } catch (e) {
      throw e;
    }
  };

  const getComments = async ({ issueId }: UseIssuePropsType) => {
    try {
      const res = await commentApi({ issueId });
      console.log(res);
      setComments(res.data);
    } catch (e) {
      throw e;
    }
  };

  const handleRegistComment = async (formData: RegisterCommentFormDataType) => {
    const { comment } = formData;
    const res = await registerCommentApi({ issueId, comment });
    console.log(res);
    // if (res.status === 201) {
    //   alert("의견이 등록되었습니다.");
    // } else {
    //   alert(res.data);
    // }
  };

  useEffect(() => {
    getIssue({ issueId });
    getComments({ issueId });
  }, []);

  return {
    issue,
    calcAgreePercentage,
    handleAgreeButton,
    handleDisagreeButton,
    comments,
    hookForm,
    handleRegistComment,
  };
};

export default useIssue;
