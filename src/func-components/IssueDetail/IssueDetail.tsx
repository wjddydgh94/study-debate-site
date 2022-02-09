import React, { useEffect } from "react";
import styled from "styled-components";
import Comments from "./Comments";
import useIssue from "./hooks/useIssue";

interface IssueDetailPropsType {
  issueId: number;
}

const IssueDetail = ({ issueId }: IssueDetailPropsType) => {
  const {
    issue,
    calcAgreePercentage,
    handleAgreeButton,
    handleDisagreeButton,
    comments,
  } = useIssue({
    issueId,
  });

  return (
    <Wrapper>
      <AgreeSection>
        {issue && (
          <>
            <h1>{issue.title}</h1>
            <p className="description">{issue.description}</p>
            <DebateRateSection agreePercentage={calcAgreePercentage}>
              <p>{issue.vote.agree ? calcAgreePercentage : 0}%</p>
              <div className="rate-bar">
                <div className="agree"></div>
                <div className="disagree"></div>
              </div>
              <p>{issue.vote.agree ? 100 - calcAgreePercentage : 0}%</p>
            </DebateRateSection>
            <div className="button-section">
              <button onClick={handleAgreeButton}>찬성</button>
              <button onClick={handleDisagreeButton}>반대</button>
            </div>
          </>
        )}
      </AgreeSection>
      {comments && <Comments comments={comments} />}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 750px;
  margin: auto;
  padding: 50px 0;
`;

const AgreeSection = styled.section`
  padding: 50px 37.5px;
  background-color: #fff;
  h1 {
    font-size: 37px;
    line-height: 120%;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
  }
  .description {
    font-size: 20px;
    line-height: 150%;
    font-weight: 300;
    margin: 0 10px 50px;
    color: #333;
  }
  .button-section {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      width: 45%;
      padding: 20px 0;
      color: #555;
      font-size: 20px;
      font-weight: 800;
      border: 1px solid #ababab;
      border-radius: 50px;
      background: linear-gradient(
        to top,
        rgba(224, 224, 224) 0%,
        rgba(255, 255, 255) 50%
      );
      cursor: pointer;
      &:first-child {
        margin-right: 2%;
      }
    }
  }
`;

const DebateRateSection = styled.div<{ agreePercentage: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  p {
    padding: 0 30px;
    font-size: 20px;
  }
  .rate-bar {
    flex: 1;
    display: flex;
    background-color: #eee;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
    .agree {
      width: ${(props) => (props.agreePercentage ? props.agreePercentage : 0)}%;
      background-color: #4673e3;
    }
    .disagree {
      width: ${(props) =>
        props.agreePercentage ? 100 - props.agreePercentage : 0}%;
      background-color: #fe6b53;
    }
  }
`;

export default IssueDetail;
