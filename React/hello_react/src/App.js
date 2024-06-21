import { useState } from 'react';

export default function App() {
  return (
    <>
      <h1>Hello, world!</h1>
      <div>
        <b>111111111</b>
        <ul>
            <li>111</li>
            <li>111</li>
            <li>111</li>
        </ul>
      </div>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
  );
}