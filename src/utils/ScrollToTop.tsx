import { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const ScrollToTop = ({ history }: { history: RouteComponentProps['history'] }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line
  }, []);

  return null;
};

export default withRouter(ScrollToTop);
