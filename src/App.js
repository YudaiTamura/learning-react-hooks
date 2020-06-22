import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const incrementLoop = () => setCount((previousCount) => (previousCount >= 10 ? 0 : previousCount + 1));
  const decrementLoop = () => setCount((previousCount) => (previousCount <= -10 ? 0 : previousCount - 1));

  const reset = () => setCount(0);

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={incrementLoop}>incrementLoop</button>
        <button onClick={decrementLoop}>decrementLoop</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

export default App;
