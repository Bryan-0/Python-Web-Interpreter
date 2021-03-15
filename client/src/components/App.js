import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import PythonEditor from './PythonEditor';
import PythonInterpreter from './PythonInterpreter';

import axios from 'axios';
import './styles/App.css';

const App = () => {

    const [pyCode, setPyCode] = useState('print("Hello World")');
    const [pyCodeOutput, setPyCodeOutput] = useState('');
    const [isLoading, setLoading] = useState(false);

    const onEditorChange = (pythonCode) => {
        setPyCode(pythonCode);
    };

    const removeTempFile = (filename) => {
        axios.post('http://localhost:5000/api/python/remove', { filename });
    }

    const onRunCode = async () => {
        setLoading(true);

        axios.post('http://localhost:5000/api/python/interprete', { pyCode }).then(({ data }) => {
            console.log(data);
            setLoading(false);
            setPyCodeOutput(data.output);
            removeTempFile(data.filename)
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