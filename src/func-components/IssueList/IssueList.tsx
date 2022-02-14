import { IssueListResponseType } from "@/types/issues";
import React from "react";
import styled from "styled-components";
import useIssueList from "./hooks/useIssueList";
import IssueListItem from "./IssueListItem/IssueListItem";

const IssueList = () => {
  const { list } = useIssueList();
  return (
    <main className="main">
      <IssueListUl>
        {list &&
          list.map((item: IssueListResponseType) => {
            return <IssueListItem item={item} />;
          })}
      </IssueListUl>
    </main>
  );
};

const IssueListUl = styled.ul``;

export default IssueList;
