import { useCallback, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), [count]);
  return { count, increment };
};

export default useCounter;
