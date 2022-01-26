import { IssueListApi } from "@/api/issue";
import { IssueListResponseType } from "@/types/issues";
import React, { useEffect, useMemo, useState } from "react";

const useIssueList = () => {
  const [list, setList] = useState<IssueListResponseType[] | []>();

  const IssueListState = async () => {
    try {
      const resIssueList = await IssueListApi();

      setList(resIssueList.data);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    IssueListState();
  }, []);

  return { list };
};

export default useIssueList;
