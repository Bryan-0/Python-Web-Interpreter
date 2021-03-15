import React, { useState } from 'react';
import './styles/PythonEditor.css';

const PythonEditor = ({ onEditorChange }) => {

    const sendCode = (e) => {
        onEditorChange(e.currentTarget.innerHTML);
    }

    return (
        <div>
            <div onInput={(e) => sendCode(e)} contentEditable={true} className="pythonEditorDiv">
                print("Hello World")
            </div>
        </div>
    )
};

export default PythonEditor;