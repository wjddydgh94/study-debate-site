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
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

interface UseIssuePropsType {
  issueId: number;
}

function useIssue({ issueId }: UseIssuePropsType) {
  const [issue, setIssue] = useState<IssueResponseType | null>(null);
  const [comments, setComments] = useState<CommentsResponseType[]>([]);
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
      getIssue({ issueId });
    } catch (e) {
      throw e;
    }
  };

  const handleDisagreeButton = async () => {
    const prevAgree = issue ? issue.vote.agree : 0;
    const prevDisgree = issue ? issue.vote.disagree : 0;
    try {
      await voteDisagreeApi({ issueId, prevAgree, prevDisgree });
      getIssue({ issueId });
    } catch (e) {
      throw e;
    }
  };

  const getComments = useCallback(
    async ({ issueId }: UseIssuePropsType) => {
      try {
        const res = await commentApi({ issueId });
        console.log("res : ", res.data);
        setComments(res.data);
      } catch (e) {
        throw e;
      }
    },
    [setComments]
  );

  const handleRegistComment = useCallback(
    async (formData: RegisterCommentFormDataType) => {
      const { comment } = formData;
      const res = await registerCommentApi({ issueId, comment });

      if (res.status === 201) {
        // alert("의견이 등록되었습니다.");
        getComments({ issueId });
      } else {
        alert(res.data);
      }
    },
    [issueId]
  );

  useEffect(() => {
    getIssue({ issueId });
    getComments({ issueId });
  }, []);

  useEffect(() => {
    console.log("useIssue useEffect comments : ", comments);
  }, [comments]);

  return {
    issue,
    comments,
    calcAgreePercentage,
    handleAgreeButton,
    handleDisagreeButton,
    hookForm,
    handleRegistComment,
  };
}

export default useIssue;
