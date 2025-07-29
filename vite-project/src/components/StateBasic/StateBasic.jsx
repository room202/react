import { useState } from "react";

export default function StateBasic(props) {
    const {init} = props;
    const [count, setCount] = useState(init);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました。</p>
        </>
    );

}