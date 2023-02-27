import ArrayEntry from './ArrayEntry.js';

const ArrayList = ({ state }) => {
  return (
    <ul>
      {state.map((date) => (
        <ArrayEntry key={date.getTime()} date={date} />
      ))}
    </ul>
  );
};

export default ArrayList;
