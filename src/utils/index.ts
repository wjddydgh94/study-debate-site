export const isServer = () =>
  typeof window === 'undefined' || typeof window === undefined;

export const isClient = () => !isServer();
