import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

const style = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "8px",
};

export const Child1 = memo((props) => {
  console.log("Child1レンダリング");

  const { onClickReset } = props;

  return (
    <div style={style}>
      <p>Child1</p>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={onClickReset}>
          リセット
      </button>
      <Child2 />
      <Child3 />
    </div>
  );
});
