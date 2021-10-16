import "../styles/About.css"
import React from "react";
import Footer from "./Footer";

export default function About(props) {
    return (
        <div className="about">
            <div>About</div>
            <Footer path="/" label="Tarefas"></Footer>
        </div>
    )
}