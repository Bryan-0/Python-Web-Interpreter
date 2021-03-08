import React from 'react';
import './PythonEditor.css';

const PythonEditor = () => {
    return (
        <div className="pythonEditorDiv" contentEditable={true}>
            print('Hello world')
        </div>
    )
};

export default PythonEditor;