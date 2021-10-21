import "../styles/Footer.css"
import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className="footer">
            <span>por <a href="https://github.com/brunohubner" target="_blank" rel="noreferrer">Bruno Hubner</a></span>
            <Link to={props.path}>{props.label}</Link>
        </footer>
    )
}