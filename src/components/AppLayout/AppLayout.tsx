import React from 'react';
import styled from 'styled-components';

export interface AppLayoutPropsType {
  children: React.ReactChild;
}

function AppLayout({ children }: AppLayoutPropsType) {
  return (
    <Wrapper>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </Wrapper>
  );
}

export default AppLayout;

const Wrapper = styled.div``;

const Header = styled.header`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Main = styled.main``;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;
