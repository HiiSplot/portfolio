import type React from "react"
import './photography.css'

export const Photography: React.FC = () => {
  const BASE_URL = '/portfolio';
  return (
    <section className="photographie">
    <div className="padding"></div>
    <div id="photographie"></div>
    <h1>PHOTO<strong>GRAPHIE.</strong></h1>
      <div>
          <div className="flex">
              <div className="img1">
                  <img src={`${BASE_URL}/images/machine.JPG`} alt="" />
              </div>
              <div className="img2">
                  <img src={`${BASE_URL}/images/urbex09.JPG`} alt="" />
              </div>
          </div>

          <div className="flex">
            <div className="img3">
              <img src={`${BASE_URL}/images/roue.jpg`} alt="" />
            </div>
            <div className="img4">
              <img src={`${BASE_URL}/images/IMG_8230.JPG`} alt="" />
            </div>
          </div>


          <div className="flex">
              <div className="img7">
                  <img src={`${BASE_URL}/images/feuille2.JPG`} alt="" />
              </div>
              <div className="img8">
                  <img src={`${BASE_URL}/images/urbex01.jpg`} alt="" />
              </div>
          </div>

          <div className="flex">
              <div className="img9">
                  <img  src={`${BASE_URL}/images/kaya.JPG`} alt="" />
              </div>
              <div className="img10">
                  <img src={`${BASE_URL}/images/biche.jpg`} alt="" />
              </div>
          </div>

          <div className="flex">
              <div className="img11">
                  <img src={`${BASE_URL}/images/pont.jpg`} alt="" />
              </div>
              <div className="img12">
                  <img src={`${BASE_URL}/images/flou.JPG`} alt="" />
              </div>
          </div>

          <div className="flex">
              <div className="img13">
                  <img src={`${BASE_URL}/images/fenetre.JPG`} alt="Fenêtre" />
              </div>
              <div className="img14">
                  <img src={`${BASE_URL}/images/chloe.jpg`} alt="Chloé" />
              </div>
          </div>
      </div>

      <div className="padding"></div>
      <div className="padding"></div>
      <div className="padding"></div>
    </section>
  )
}