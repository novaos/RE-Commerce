import React from 'react';

type Props = {
  error: Error | null;
};

const Error: React.FC<Props> = ({ error }) => <span>Error: {error && error.message}</span>;

export default Error;
