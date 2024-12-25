import { useState } from "react"

const useInputState = (defaultValue=null) =>{
    const [value, setInputValue] = useState(defaultValue)

    // const handleChange = e =>{
    //     setInputValue(e.target.value);
    // }

    const onChange = e =>{
        setInputValue(e.target.value);
    }

    // return [value, handleChange];

    return {
        value,
        onChange
    }
}

export default useInputState;