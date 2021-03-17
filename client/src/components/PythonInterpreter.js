import React from 'react';
import './styles/PythonInterpreter.css';

const PythonInterpreter = ({ pyCodeOutput }) => {
    return (
        <div className="pythonInterpreterDiv">
            Output:<br />
            { pyCodeOutput }
        </div>
    )
}

export default PythonInterpreter;