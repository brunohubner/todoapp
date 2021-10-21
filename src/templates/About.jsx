import "../styles/About.css"
import React from "react";
import Footer from "./Footer";

export default function About(props) {
    return (
        <div className="about">
            <div className="content">
                <div>
                    <p>
                        Por mais simples que pareça essa aplicação,
                        há toda uma complexidade envolvida nos bastidores
                        de seu desenvolvimento. A parte visual, Frontend,
                        foi desenvolvida utilizando as seguintes tecnologias:
                        HTML, CSS, JavaScript e ReactJS a qual faz usos das melhores
                        práticas de desenvolvimento Frontend, como uso de componentes,
                        hooks, e controle de estado.
                    </p>
                    <p>
                        Além disso, as informações das tarefas são salvas em um banco de
                        dados não relacional, MongoDB, onde a conexão, é feita por uma RestAPI
                        desenvolvida com NodeJS e Express.
                    </p>
                </div>
                <span>brunohubnerdev@gmail.com</span>
            </div>
            <Footer path="/" label="Tarefas"></Footer>
        </div>
    )
}