import { IssueApi, VoteAgreeApi, VoteDisagreeApi } from "@/api/issue";
import { IssueResponseType } from "@/types/issues";
import React, { useEffect, useState } from "react";

interface useIssuePropsType {
  issueId: string | string[] | undefined;
}

const useIssue = ({ issueId }: useIssuePropsType) => {
  const [issue, setIssue] = useState<IssueResponseType | null>(null);
  const [agreePercentage, setAgreePercentage] = useState(0);

  const getIssue = async (issueId: string) => {
    try {
      const res = await IssueApi({ issueId });
      setIssue(res.data);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getIssue(issueId as string);
  }, []);

  const calcAgreePercentage = () => {
    const totalVote = issue ? issue.vote.agree + issue.vote.disagree : 0;
    const agreePercent = issue
      ? Math.round((issue.vote.agree / totalVote) * 100)
      : 0;
    setAgreePercentage(agreePercent);
  };

  useEffect(() => {
    calcAgreePercentage();
  }, [issue]);

  const handleAgreeOrDisagreeButton = async (type: string) => {
    const prevAgree = issue ? issue.vote.agree : 0;
    const prevDisgree = issue ? issue.vote.disagree : 0;
    try {
      if (type === "agree") {
        await VoteAgreeApi({ issueId, prevAgree, prevDisgree });
      } else {
        await VoteDisagreeApi({ issueId, prevAgree, prevDisgree });
      }
    } catch (e) {
      throw e;
    }
  };

  return { issue, agreePercentage, handleAgreeOrDisagreeButton };
};

export default useIssue;
