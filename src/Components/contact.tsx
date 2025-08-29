import React from "react"
import './contact.css'

export const Contact: React.FC = () => {
  return (
    <section className="contact">
    <div id="contact"></div>
    <div className="container">
      <div className="section-3">
        <div className="flex">
        <h1>formulaire <strong><br />de contact.</strong></h1>
        <a href="./images/CV - Laura Bensimon.pdf" target="_blank"><button>télécharger mon cv <i className="fa-sharp fa-solid fa-chevron-down"></i></button></a>
          </div>
        <p>[EN CONSTRUCTION]</p>
      </div>
      </div>
      <div className="footer">
        <a href="https://www.linkedin.com/in/laura-bensimon/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
      </div>
    </section>
  )
}