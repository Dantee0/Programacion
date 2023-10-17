import React from "react";
import './Footer.css';
// import { icons } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";


export const Footer = () => {
    return (
        <div>
            <footer>
                <p>Programación 2023 | AGM - DI</p> 
                <section>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Dantee0/Programacion" role="button" target="__blank">
                        <i className="fab fa-github"><FaGithub /></i>
                    </a>
                </section>
                <section>
                    <a id="contact" href="mailto:JDMZone@gmail.com">Contáctame aquí </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#top">
                        <i className="fas fa-arrow-up"><AiOutlineArrowUp /></i>
                    </a>
                </section> 
            </footer>  
        </div>
    )
}