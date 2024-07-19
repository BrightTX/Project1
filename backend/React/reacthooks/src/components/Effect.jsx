
import { useEffect, useState } from "react";

const EffectDemo = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Fired from effect");
    },[]);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
};
export default EffectDemo;