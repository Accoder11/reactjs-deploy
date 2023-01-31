import React from "react";
import { useState } from "react";
import { Button } from 'react-bootstrap';

const Count = () => {
    const [count, setCount] = useState(4)

    const incrementValue = () => {
        setCount(count + 1)
    }

    const decrementValue = () => {
        setCount(count - 1)
    }

    return (
        <>
        <Button variant="warning" onClick={incrementValue}>Increment(+)</Button>
        <p>{count}</p>
        <br/>
        <Button variant="success" onClick={decrementValue}>Decrement(-)</Button>
        
        </>
    )
}

export default Count;