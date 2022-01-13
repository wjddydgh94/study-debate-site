import { NextPageContext } from 'next';
import React from 'react';

interface ErrorPagePropsType {
  statusCode: number;
}

function RootError({ statusCode }: ErrorPagePropsType) {
  if (statusCode === 404) return <div>404</div>;
  return <div>{statusCode}...</div>;
}

RootError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode,
  };
};

export default RootError;
