import { useState } from "react";
import Counter from "./Counter1";
import Counter1 from "./Counter1";
import Counter2 from "./counter2";

export default function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);

  const handleClick = () => {
    setTotalCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        Total Count: {totalCount} {totalCount > 10 ? "🔥" : "🧊"}
      </div>
      <div>
        <Counter1
          totalCount={totalCount}
          setTotalCount={setTotalCount}
          handleClick={handleClick}
        />
        <Counter2
          totalCount={totalCount}
          setTotalCount={setTotalCount}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
