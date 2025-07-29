import { useState } from "react";

function EventBasic({ type }) {

    const [dateStr, setDateStr] = useState();

    const current = () => {
        const d = new Date();

        switch (type) {
            case 'date':
                setDateStr(d.toLocaleDateString())
                console.log(d.toLocaleDateString());
                break;
            case 'time':
                setDateStr(d.toLocaleTimeString())
                console.log(d.toLocaleTimeString());
                break;
            default:
                setDateStr(d.toLocaleString());
                console.log(d.toLocaleString());
                break;
        }
    };

    return (
        <div>
            <button onClick={current}>現在時刻を取得</button>
            <p>{dateStr}</p>
        </div>
    );
}

export default EventBasic;