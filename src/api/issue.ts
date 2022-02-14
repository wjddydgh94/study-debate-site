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
    url: `comments?issueId=${req.issueId}`,
    method: "GET",
  });
};

interface RegisterCommentRequestType {
  issueId: number;
  comment: string;
}

export const registerCommentApi = (req: RegisterCommentRequestType) => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  return callApi({
    url: `issues/${req.issueId}/comments/`,
    method: "POST",
    data: {
      comment: req.comment,
      date: `${year}.${month}.${date}`,
      userId: "테스트용",
    },
  });
};
