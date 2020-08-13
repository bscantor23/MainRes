import React from 'react';
import '../Navbar.css';

export default function () {
    return (
        <div className="navbar">
            <div className="logo-space">
                <img className="logo" src="img/logo.png" alt=""/>
                <h1>MainRes</h1>
            </div>
            <div className="user-name">
                <h2>Administrador</h2>
            </div>
        </div>
    );
}
