import { callApi } from "./config";

export const IssueListApi = () => {
  return callApi({
    url: "/issues",
    method: "GET",
  });
};

interface IssueRequestType {
  issueId: string;
}

export const IssueApi = (req: IssueRequestType) => {
  const issueId = parseInt(req.issueId);

  return callApi({
    url: `/issues/${issueId}`,
    method: "GET",
  });
};

interface VoteAgreeRequestType {
  issueId: string | string[] | undefined;
  prevAgree: number;
  prevDisgree: number;
}

export const VoteAgreeApi = (req: VoteAgreeRequestType) => {
  const issueId = parseInt(req.issueId as string);

  return callApi({
    url: `issues/${issueId}`,
    method: "PATCH",
    data: {
      vote: {
        agree: req.prevAgree + 1,
        disagree: req.prevDisgree,
      },
    },
  });
};

export const VoteDisagreeApi = (req: VoteAgreeRequestType) => {
  const issueId = parseInt(req.issueId as string);

  return callApi({
    url: `issues/${issueId}`,
    method: "PATCH",
    data: {
      vote: {
        agree: req.prevAgree,
        disagree: req.prevDisgree + 1,
      },
    },
  });
};
