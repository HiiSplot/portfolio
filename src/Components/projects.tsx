import React from "react"
import './projects.css'

export const Projects: React.FC = () => {
  const BASE_URL = 'portfolio';
  return (
    <section className="projets">
      <div className="padding"></div>
      <div id="projets"></div>
      <h1>DEVELOPPEMENT<br /><strong>WEB.</strong></h1>
      <div className="padding"></div>
      <div className="flex-rectangle">
        <div className="capt5">
          <img src={`${BASE_URL}/images/Capture06.png`} alt="" />
        </div>
      </div>
      <div className="flex-rectangle">
        <div className="capt6">
          <img src={`${BASE_URL}/images/Capture07.png`} alt="" />
        </div>
      </div>
      <div className="flex-rectangle">
        <div className="capt7">
          <img src={`${BASE_URL}/images/Capture08.png`} alt="" />
          <p>HTML, CSS - <a href="https://hiisplot.github.io/beacon/" target="_blank">VOIR SUR GITHUB</a></p>
          <p>Projet personnel - Maquette Beacon</p>
        </div>
      </div>

      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>

      <div className="flex-rectangle">
        <div className="capt8">
          <img src={`${BASE_URL}/images/Capture09.png`} alt="" />
        </div>
      </div>

      <div className="flex-rectangle">
        <div className="capt9">
          <img src={`${BASE_URL}/images/Capture10.png`} alt="" />
        </div>
      </div>

      <div className="flex-rectangle">
        <div className="capt10">
          <img src={`${BASE_URL}/images/Capture11.png` alt="" />
          <p>HTML, CSS - <a href="https://hiisplot.github.io/mountain" target="_blank">VOIR SUR GITHUB</a></p>
          <p>Projet personnel - Maquette La montagne</p>
        </div>
      </div>

      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>

      <div className="flex-rectangle">
        <div className="capt8">
          <img src={`${BASE_URL}/images/Capture12.png`} alt="" />
        </div>
      </div>

      <div className="flex-rectangle">
        <div className="capt9">
          <img src={`${BASE_URL}/images/Capture13.png`} alt="" />
        </div>
      </div>

      <div className="flex-rectangle">
        <div className="capt10">
          <img src={`${BASE_URL}/images/Capture14.png`} alt="" />
          <p>HTML, CSS  - <a href="https://hiisplot.github.io/the-resto" target="_blank">VOIR SUR GITHUB</a></p>
          <p>Projet personnel - Maquette "The resto"</p>
        </div>
      </div>

      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>


      <div className="flex">
        <div className="capt1">
          <img src={`${BASE_URL}/images/Capture01.png`} alt="" />
          <p>HTML, CSS, Javascript  - <a href="https://hiisplot.github.io/Projet-memory" target="_blank">VOIR SUR GITHUB</a></p>
          <p>Projet ENI - Jeu du memory</p>
        </div>

        <div className="capt2">
          <img src={`${BASE_URL}/images/Capture05.png`} alt="" />
        </div>
      </div>


      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
    </section>
  )
}