import * as React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import './comparison.scss';
import { Difference } from './components';

const Comparison: React.FC = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className={'comparison-wrapper'}>
      <Difference products={state.comparisonProducts ?? []} />
    </div>
  );
};

export default Comparison;
