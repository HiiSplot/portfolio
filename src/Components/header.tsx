import React from "react"
import './header.css'

export const Header: React.FC = () => {
  return (
    <>
    <header>
      <nav>
        <div className="logo">
          <strong>Laura</strong> / <br />
          <strong>Bensimon</strong>
        </div>
        <ul>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#photographie">Photographie </a></li>
          <li><a href="#about">A propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <section>
      <div className="header">
        <div className="left-container">
          <h1>Laura <strong><br />Bensimon.</strong></h1>
          <div><h2>Graphic designer <br />& web developper</h2></div>
        </div>
        <div className="right-container"></div>
      </div>
    </section>
    </>
  )
}