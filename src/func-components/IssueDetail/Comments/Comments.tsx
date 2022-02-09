import { CommentsResponseType } from "@/types/issues";
import styled from "styled-components";

interface CommentsPropsType {
  comments: CommentsResponseType;
}

const Comments = ({ comments }: CommentsPropsType) => {
  return (
    <CommentsWrapper>
      <CommentItem>
        {comments.items.map((item) => {
          return (
            <div className="container" key={item.id}>
              <div className="img"></div>
              <div className="contents">
                <p className="user-name">{item.userId}</p>
                <p className="comment">{item.comment}</p>
                <p className="date">{item.date}</p>
              </div>
            </div>
          );
        })}
      </CommentItem>
    </CommentsWrapper>
  );
};

const CommentsWrapper = styled.section`
  padding: 0 37.5px;
  margin-top: 50px;
  background: #fff;
`;

const CommentItem = styled.div`
  padding: 50px 0;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  .container {
    width: 100%;
    display: flex;
    .img {
      width: 70px;
      height: 70px;
      margin-right: 50px;
      border-radius: 50%;
      background: #eee;
    }
    .contents {
      .user-name {
        font-size: 21px;
        font-weight: 700;
      }
      .comment {
        font-size: 19px;
        line-height: 160%;
        position: relative;
        letter-spacing: -1px;
        margin-top: 5px;
      }
      .date {
        font-size: 18px;
        color: #888;
        margin-top: 20px;
      }
    }
  }
  &:last-child {
    border-bottom: none;
  }
`;

export default Comments;
