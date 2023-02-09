const Text = ({ count }) => {
  return (
    <p className={count > 5 ? "backgroundOlive" : ""}>
      {count <= 10
        ? `The current count is: ${count}`
        : `Count is bigger than 10`}
    </p>
  );
};

export default Text;
