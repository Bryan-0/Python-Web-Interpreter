import React, { useState } from 'react';
import './styles/PythonEditor.css';

const PythonEditor = ({ onEditorChange }) => {

    const sendCode = (e) => {
        onEditorChange(e.currentTarget.textContent);
    }

    return (
        <div onInput={(e) => sendCode(e)} className="pythonEditorDiv" contentEditable={true}>
        </div>
    )
};

export default PythonEditor;