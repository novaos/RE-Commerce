import React, { createContext, useReducer } from 'react';

type Props = {
  children: React.ReactNode;
};

interface Context {}

const initialContext: Context = {};

type Action = { type: string; payload: any };

// @ts-ignore
function reducer(state: Context, action: Action): Context {
  switch (action.type) {
    default:
      throw new Error('Unhandled action type.');
  }
}

export const GlobalContext = createContext<{
  state: typeof initialContext;
  dispatch: (action: Action) => void;
}>({ state: initialContext, dispatch: () => {} });

const GlobalContextProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialContext);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
