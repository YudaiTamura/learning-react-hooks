import React, { useState } from "react";

const App = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const incrementLoop = () => setCount((previousCount) => (previousCount >= 10 ? 0 : previousCount + 1));
  const decrementLoop = () => setCount((previousCount) => (previousCount <= -10 ? 0 : previousCount - 1));

  const reset = () => setCount(0);

  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const resetInput = () => {
    setPrice(props.price);
    setName(props.name);
  };

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
      <hr />
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={resetInput}>reset</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

App.defaultProps = {
  name: "サンプル",
  price: 1000,
};

export default App;
