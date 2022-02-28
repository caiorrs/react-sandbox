import { useEffect, useRef, useState } from "react";

import Todo from "./Todo";

const UseRefExample3 = () => {
  const renders = useRef(1);

  const [showTodo, setShowTodo] = useState(true);

  useEffect(() => {
    renders.current = renders.current + 1;
  }, []);

  return (
    <div>
      {showTodo && <Todo />}
      <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>
        Toggle Todo
      </button>
    </div>
  );
};

export default UseRefExample3;
