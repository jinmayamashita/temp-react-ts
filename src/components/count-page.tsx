import { useState } from "react";
import Button from "./button";

export default function CountPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count Page</h1>
      <p>Count: {count}</p>
      <Button text="Increment Count" onClick={() => setCount(count + 1)} />
    </div>
  );
}
