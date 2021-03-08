import React from 'react';
import {
    Link
} from "react-router-dom";

const User = () => {
    return (
        <div style={{ textAlign: 'center', fontSize: '50px' }}>
            Brayan.
            <p></p>
            <Link to="/"><button>Index page</button></Link>
        </div>
    )
}

export default User;