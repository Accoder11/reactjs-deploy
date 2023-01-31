import React from "react";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Count = () => {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState("")

    const incrementValue = () => {
        setCount((prevCount) => prevCount + 1)
        if (count <= 10) {
            setCount(10);
        }
    }

    const decrementValue = () => {
        setCount((prevCount) => prevCount - 1)
        if (count <= 0) {
            setCount(0);
        }
    }

    const handleOnChange = (e) => {
        setInput(prevInput => e.target.value)
        console.log(input)
    }

    return (
        //className="mx-auto my-5"
        //className="justify-content-md-center"
        <> 
        <Container>
        <Row>
        <Col className="mx-5 my-5">
        <Button variant="outline-danger" onClick={decrementValue}>(-)</Button>
        <span className="mx-5">{count}</span>
        <Button variant="outline-warning" onClick={incrementValue}>(+)</Button>
        </Col>
        </Row>
        <Row>
        <Col className="mx-5 my-5">
            <input onChange={handleOnChange} value={input}></input>
            </Col>
        </Row>

        </Container>
        </>
    )
}

export default Count;