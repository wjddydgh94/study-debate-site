import Link from "next/link";
import React from "react";
import styled from "styled-components";
import useHeader from "./hooks/useHeader";

interface HeaderPropsType {
  isLoggedIn: boolean;
}

const Header = ({ isLoggedIn }: HeaderPropsType) => {
  const { handleSignOut } = useHeader();
  return (
    <HeaderWrapper>
      <ul>
        {isLoggedIn ? (
          <li onClick={handleSignOut}>로그아웃</li>
        ) : (
          <>
            <li>
              <Link href="/sign-in">
                <a href="#">로그인</a>
              </Link>
            </li>
            <span className="seperate">|</span>
            <li>
              <Link href="/sign-up">
                <a href="#">회원가입</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  background-color: #000;

  ul {
    height: 100%;
    display: flex;
    padding-right: 20px;
    justify-content: flex-end;
    align-items: center;
    li {
      color: #fff;
      font-size: 16px;
      line-height: 16px;
      font-weight: bold;
      cursor: pointer;
      a {
        color: #fff;
        font-size: 16px;
        line-height: 16px;
        font-weight: bold;
      }
    }
    .seperate {
      color: #fff;
      margin: 0 20px;
    }
  }
`;

export default Header;
