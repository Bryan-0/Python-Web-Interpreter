import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import PythonEditor from './PythonEditor';
import PythonInterpreter from './PythonInterpreter';

import axios from 'axios';

const App = () => {

    const [pyCode, setPyCode] = useState('');
    const [pyCodeOutput, setPyCodeOutput] = useState('');
    const [isLoading, setLoading] = useState(false);

    const onEditorChange = (pythonCode) => {
        setPyCode(pythonCode);
        //console.log(pyCode);
    };

    const onRunCode = async () => {
        if (!pyCode) return;
        setLoading(true);

        axios.post('http://localhost:5000/api/python', { pyCode }).then(({ data }) => {
            console.log(data.output);
            setLoading(false);
            setPyCodeOutput(data.output);
        });
    }

    return (
        <Container>
            <p></p>
            <Button 
                variant="success" 
                size="lg"
                disabled={isLoading}
                onClick={onRunCode}
            block>
                {isLoading ? 'Wait...' : 'Run Code'}
            </Button>
            <Row>
                <Col>
                    <p></p>
                    <PythonEditor onEditorChange={onEditorChange} />
                </Col>
                <Col>
                    <p></p>
                    <PythonInterpreter />
                </Col>
            </Row>
        </Container>
    )
}

export default App;