import React,{useState} from 'react'

export default function NotFound() {
  const [count, setCount] = useState(0);

  const log = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(count);
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={log}>Click me</button>
    </div>
  );
}
