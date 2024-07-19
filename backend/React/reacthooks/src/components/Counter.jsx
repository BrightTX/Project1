import { useState, useRef, useEffect } from "react";

const counter = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

// Here, we're using useRef to store the previous value of

        useEffect(() => {
            prevCountRef.current = count;
        }, [count]);

    const prvCount = prevCountRef.current;

    // We update the ref using useEffect whenever the count changes.

    return (

        <div>

            <p>Current: {count}</p>
            <p>Previous: {prevCount !== undefined ? prevCount : 'N/A'}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>

    )
}




const prevCount = prevCountRef