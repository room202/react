import "./App.css";
import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
// import { Child2 } from "./components/Child2";
// import { Child3 } from "./components/Child3";
import { Child4 } from "./components/Child4";

export const App = memo( () => {
  console.log("Appレンダリング");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  // const onClickReset = () => {
  //   setNum(0);
  // };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={onClickButton}
      >
        ボタン
      </button>
      <p>{num}</p>

      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});

export default App;
