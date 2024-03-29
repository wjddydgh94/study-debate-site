import IssueDetail from "@/func-components/IssueDetail";
import { useRouter } from "next/router";
import React from "react";

const IssueDetailPage = () => {
  const router = useRouter();
  const { issueId } = router.query;

  return <IssueDetail issueId={parseInt(issueId as string)} />;
};

export default IssueDetailPage;
