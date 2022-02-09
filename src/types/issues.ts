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
  id: number;
  items: { comment: string; userId: string; date: string; id: number }[];
}
