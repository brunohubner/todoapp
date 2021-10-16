import "../styles/Footer.css"
import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className="footer">
            <span>by Bruno Hubner</span>
            <Link to={props.path}>{props.label}</Link>
        </footer>
    )
}