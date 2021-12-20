import { Button, Result } from 'antd';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const NotFound: React.FC = () => {
  const history = useHistory();
  const goHome = useCallback(() => {
    history.push('/');
  }, [history]);
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={goHome} type="primary">
          Back Home
        </Button>
      }
    />
  );
};
export default NotFound;
