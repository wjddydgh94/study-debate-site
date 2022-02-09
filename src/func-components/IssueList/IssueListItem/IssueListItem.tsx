import { IssueListResponseType } from "@/types/issues";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface IssueListItemPropsType {
  item: IssueListResponseType;
}

const IssueListItem = ({ item }: IssueListItemPropsType) => {
  return (
    <Item key={item.id}>
      <div className="title-wrapper">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <div className="comment-wrapper">
        <Link href={`/issue/${item.id}`}>
          <a>
            의견 {item.recentComments.length}개 모두보기<span> &gt;</span>
          </a>
        </Link>
        <ul className="comment-list">
          {item.recentComments.map((comment) => {
            return (
              <li key={comment.id}>
                <span className="user-name">{comment.userId}</span>
                {comment.comment}
              </li>
            );
          })}
        </ul>
      </div>
    </Item>
  );
};

const Item = styled.li`
  margin-bottom: 50px;
  .title-wrapper {
    background-color: #333;
    color: #fff;
    padding: 50px;
    h2 {
      font-weight: 700;
      font-size: 33px;
      color: #fff;
      margin-bottom: 12px;
    }
    p {
      font-size: 16px;
      line-height: 140%;
      font-weight: 200;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .comment-wrapper {
    padding: 35px 35px 20px;
    background-color: #fff;
    a {
      color: #b0b0b0;
      font-weight: 400;
      font-size: 20px;
      border-bottom: 1px solid #e0e0e0;
      margin-bottom: 12px;
      padding-bottom: 20px;
      line-height: 1;
      display: inline-block;
      width: 100%;
      span {
        font-weight: bold;
      }
    }
    .comment-list {
      margin: 15px 0;
      li {
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 13px;
        .user-name {
          font-weight: 700;
          color: #333;
          margin-right: 15px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default IssueListItem;
