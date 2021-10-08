import React, { createContext, useReducer } from 'react';

type Props = {
  children: React.ReactNode;
};

interface Context {
  property_first: number;
  property_second: string;
}

const initialContext: Context = {
  property_first: 0,
  property_second: 'initial value'
};

type Action = { type: 'UPDATE_PROPERTY_FIRST'; payload: number } | { type: 'UPDATE_PROPERTY_SECOND'; payload: string };

function reducer(state: Context, action: Action): Context {
  switch (action.type) {
    case 'UPDATE_PROPERTY_FIRST':
      return { ...state, property_first: action.payload };
    case 'UPDATE_PROPERTY_SECOND':
      return { ...state, property_second: action.payload };
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
