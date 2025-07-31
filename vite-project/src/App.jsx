import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import EventBasic from "./components/EventBasic/EventBasic";
import StateBasic from "./components/StateBasic/StateBasic";
import books from "./components/ForList/books";
import ForList from "./components/ForList/ForList";

function App() {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1>Hello World</h1>
      <Button type="submit" disabled={false} onClick={handleClick}>
        ボタン
      </Button>
      <Display count={num}/>
      <EventBasic type={'date'}/>
      <EventBasic type={'time'}/>
      <StateBasic init={100}/>
      <ForList src={books} />
    </>
  );
}

export default App;
