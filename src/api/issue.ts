import { callApi } from "./config";

export const issueListApi = () => {
  return callApi({
    url: "/issues",
    method: "GET",
  });
};

interface IssueRequestType {
  issueId: number;
}

export const issueApi = (req: IssueRequestType) => {
  return callApi({
    url: `/issues/${req.issueId}`,
    method: "GET",
  });
};

interface VoteAgreeRequestType {
  issueId: number;
  prevAgree: number;
  prevDisgree: number;
}

export const voteAgreeApi = (req: VoteAgreeRequestType) => {
  return callApi({
    url: `issues/${req.issueId}`,
    method: "PATCH",
    data: {
      vote: {
        agree: req.prevAgree + 1,
        disagree: req.prevDisgree,
      },
    },
  });
};

export const voteDisagreeApi = (req: VoteAgreeRequestType) => {
  return callApi({
    url: `issues/${req.issueId}`,
    method: "PATCH",
    data: {
      vote: {
        agree: req.prevAgree,
        disagree: req.prevDisgree + 1,
      },
    },
  });
};

interface CommentRequestType {
  issueId: number;
}

export const commentApi = (req: CommentRequestType) => {
  return callApi({
    url: `/comments/${req.issueId}`,
    method: "GET",
  });
};
