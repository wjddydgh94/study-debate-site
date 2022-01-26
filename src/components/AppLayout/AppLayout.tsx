import React from "react";
import styled from "styled-components";
import Header from "../Header";

export interface AppLayoutPropsType {
  children: React.ReactChild;
  isLoggedIn: boolean;
}

function AppLayout({ children, isLoggedIn }: AppLayoutPropsType) {
  return (
    <Wrapper>
      <Header isLoggedIn={isLoggedIn} />
      <Main>{children}</Main>
      <Footer>footer입니당</Footer>
    </Wrapper>
  );
}

export default AppLayout;

const Wrapper = styled.div``;

const Main = styled.main`
  background-color: #ebebeb;
  min-height: calc(100vh - 200px);
  width: 100%;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
