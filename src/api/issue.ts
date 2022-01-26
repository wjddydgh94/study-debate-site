import { callApi } from "./config";

export const IssueListApi = () => {
  return callApi({
    url: "/issues",
    method: "GET",
  });
};
