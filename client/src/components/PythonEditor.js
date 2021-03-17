import React, { useRef, useEffect } from 'react';
import './styles/PythonEditor.css';

const PythonEditor = ({ onEditorChange, styledCode }) => {

    return (
        <div>
            <div onInput={(e) => onEditorChange(e.currentTarget.innerHTML)} suppressContentEditableWarning={true} contentEditable={true} className="pythonEditorDiv">
               <div>print("Hello World")</div>
            </div>
        </div>
    )
};

export default PythonEditor;