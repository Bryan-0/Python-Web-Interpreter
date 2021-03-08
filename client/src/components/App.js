import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap';

import PythonEditor from './PythonEditor';
import PythonInterpreter from './PythonInterpreter';

const App = () => {

    useEffect(() => {
        getTime();
    }, []);

    const [time, setTime] = useState(0);

    const getTime = async () => {
        const { data } = await axios.get('http://localhost:5000/api/time');
        setTime(data.datetime);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <br />
                    Input:
                    <p></p>
                    <PythonEditor />
                </Col>
                <Col>
                    <br />
                    Output:
                    <p></p>
                    <PythonInterpreter />
                </Col>
            </Row>
        </Container>
    )
}

export default App;