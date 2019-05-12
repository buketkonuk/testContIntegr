import React from "react";
import "../style.css";

export default function Header() {
    return (
        <header className="navbar">
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>References</li>
            <li>About</li>
        </ul>
        </header>
    );
}