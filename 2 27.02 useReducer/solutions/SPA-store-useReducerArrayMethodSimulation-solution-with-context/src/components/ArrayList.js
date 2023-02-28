import { useContext } from 'react';
import { Store } from '../context/ArrayContext.js';
import ArrayEntry from './ArrayEntry.js';

const ArrayList = () => {
const {state} = useContext(Store);

  return (
    <ul>
      {state.map((date) => (
        <ArrayEntry key={date.getTime()} date={date} />
      ))}
    </ul>
  );
};

export default ArrayList;
