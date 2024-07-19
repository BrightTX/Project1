import { useId } from "react";

const UniqueComponent = () => {
    const uniqueID = useId();

    return (

        < div>
            <  label htmlFor={uniqueID}> Username: </label>
            <input type="text" id={uniqueID} />
        </div >
    )
}

export default UniqueComponent;