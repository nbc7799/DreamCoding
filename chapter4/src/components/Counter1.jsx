import { useState } from "react";

export default function Counter1({ setTotalCount }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTotalCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="w-[250px] h-[250px] border-red-100  text-center flex flex-col gap-10 items-center justify-center">
      <span className="text-9xl font-bold">{count}</span>
      <button
        className="text-3xl font-bold border-blue-950"
        onClick={handleClick}
      >
        Add +
      </button>
    </div>
  );
}
