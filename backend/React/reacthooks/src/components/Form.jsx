
import { useRef, useState } from "react";

const Form=()=> {
    const inputRef = useRef(null);
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted: ' + value);
        setValue('');
        inputRef.current.focus();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name :
                <input
                    type="text"
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;