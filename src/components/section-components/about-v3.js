import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__about-us-area pt-115 pb-100 ">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
			          <img src={publicUrl+"assets/img/others/obras.jpg"} alt="About Us Image" />
			          <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3 d-none">
			            <div className="ltn__video-img ltn__animation-pulse1">
			              <img src={publicUrl+"assets/img/others/8.png"} alt="video popup bg image" />
			              <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
			                <i className="fa fa-play" />
			              </a>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-30">
			            <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Nosotros</h6>
			            <h1 className="section-title">
							 <i className="fa fa-circle-check" /> Misión
			            </h1>
			            <p>Construir obras basadas en la calidad y el servicio responsable a nuestros clientes , creciendo en forma rentable y segura ofreciendo distintas modalidades para construir , asesoría en diseños de planos y materiales de construcción obteniendo asi el reconocimiento en nuestro sector mercado con clientes satisfechos.</p>
			          </div>                        
			        	<div className="section-title-area ltn__section-title-2--- mb-30">
			            <h1 className="section-title">
							<i className="fa fa-scale-balanced" /> Visión
			            </h1>
			            <p>Construir obras basadas en la calidad y el servicio responsable a nuestros clientes , creciendo en forma rentable y segura ofreciendo distintas modalidades para construir , asesoría en diseños de planos y materiales de construcción obteniendo asi el reconocimiento en nuestro sector mercado con clientes satisfechos.</p>
			          </div>     
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default AboutV3