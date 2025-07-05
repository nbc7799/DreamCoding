import { useState } from "react";
import Counter1 from "./Counter1";

export default function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <div>
      <div>
        Total Count: {totalCount} {totalCount > 10 ? "🔥" : "🧊"}
      </div>
      <div>
        <Counter1 setTotalCount={setTotalCount} />
        <Counter1 setTotalCount={setTotalCount} />
      </div>
    </div>
  );
}
