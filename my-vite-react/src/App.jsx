import { useState } from "react";
import "./App.css";
import { ColorMessage } from "./contents/ColorMessage";
import { CssModules } from "./CssModules";

export const App = () => {
  // Stateの定義
  const [num, setNum] = useState(0);

  // ボタンを押した時の処理
  const onClickButton = () => {
    setNum(num + 10);
  };

  return (
    <>
      <h1 className="text-1xl text-blue-500 font-bold ">Hello React</h1>
      <h1 className="text-3xl text-blue-500 font-bold ">Hello React</h1>
      <h1 className="text-5xl text-blue-500 font-bold ">Hello React</h1>

      <CssModules />
    </>
  );
};

export default App;
