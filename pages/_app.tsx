import React, { useEffect, useMemo, useState } from "react";
import type { AppProps } from "next/app";
import { NextPage, NextPageContext } from "next";
import { RootStateOrAny, useSelector, useStore } from "react-redux";
import configStore, { ReduxStoreType } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor } from "redux-persist/es/types";
import AppLayout from "@/components/AppLayout/AppLayout";
import "@/styles/globals.css";
import usePersistSync from "@/hooks/usePersistSync";
import { PersistSyncStateType } from "@/redux/reducers/storage";
import _ from "lodash";

function RootApp(appProps: AppProps) {
  const store = useStore();
  const { handlePersistSyncState, persistSyncState } = usePersistSync();

  useEffect(() => {
    console.log(`stage : ${process.env.NEXT_PUBLIC_STAGE}`);
  }, []);

  console.log("RootApp state: ", persistSyncState);

  return (
    <PersistGate
      persistor={(store as ReduxStoreType).__persistor as Persistor}
      loading={null}
    >
      {(isSync) => (
        <PersistSyncApp
          {...appProps}
          isSync={isSync}
          handlePersistSyncState={handlePersistSyncState}
        />
      )}
    </PersistGate>
  );
}

function PersistSyncApp({
  Component,
  pageProps,
  isSync,
  handlePersistSyncState,
}: AppProps & {
  isSync: boolean;
  handlePersistSyncState: (state: PersistSyncStateType) => void;
}) {
  const { accessToken } = useSelector((state: RootStateOrAny) => ({
    accessToken: state.auth.accessToken,
  }));

  const isLoggedIn: boolean = useMemo(() => {
    return !_.isEmpty(accessToken);
  }, [accessToken]);

  useEffect(() => {
    handlePersistSyncState(isSync ? "DONE" : "LOADING");
  }, [handlePersistSyncState, isSync]);

  return (
    <AppLayout isLoggedIn={isLoggedIn} {...pageProps}>
      <Component {...pageProps} />
    </AppLayout>
  );
}

RootApp.getInitialProps = async ({
  Component,
  ctx,
}: {
  Component: NextPage;
  ctx: NextPageContext;
}) => {
  const pageProps: any = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  console.log("RootApp.getInitialProps");

  return { pageProps };
};

export default configStore(RootApp);
