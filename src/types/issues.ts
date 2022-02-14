export interface IssueListResponseType extends IssueResponseType {}

export interface IssueResponseType {
  title: string;
  description: string;
  id: number;
  vote: {
    agree: number;
    disagree: number;
  };
  recentComments: [
    {
      comment: string;
      userId: string;
      id: number;
    }
  ];
}

export interface CommentsResponseType {
  comment: string;
  userId: string;
  date: string;
  issueId: string;
  id: number;
}

export interface RegisterCommentFormDataType {
  comment: string;
}
