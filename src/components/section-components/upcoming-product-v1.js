import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class UpcomingProductV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-115 pb-65" data-bs-bg={publicUrl+"assets/img/product-3/fondo-2.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Nuestros Proyectos</h6>
			          <h1 className="section-title  white-color">Creamos nuevos espacios<br />
			            Estableciendo Nuevos Estándares</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__upcoming-project-slider-1-active slick-arrow-3">
			      {/* upcoming-project-item */}
			      <div className="col-lg-12">
			        <div className="ltn__upcoming-project-item">
			          <div className="row">
			            <div className="col-lg-7">
			              <div className="ltn__upcoming-project-img">
			                <img src={publicUrl+"assets/img/product-3/plaza-novum.png"} alt="#" />
			              </div>
			            </div>
			            <div className="col-lg-5 section-bg-1">
			              <div className="ltn__upcoming-project-info ltn__menu-widget">
			                <h6 className="section-subtitle ltn__secondary-color mb-0">Sobre Proyectos</h6>
			                <h1 className="mb-30">PLAZA COMERCIAL NOVUM CUAUHNAHUAC</h1>
			                <p>Desarrollamos y ejecutamos proyectos de construcción con alta calidad, asesorando en diseños de planos y materiales de construcción.</p> 
							{/* BUTTON */}
							<div className="ltn__button-area mt-30">
								<Link to="/portfolio" className="theme-btn-1 btn">
									<i className="fas fa-arrow-right" />
									Ver Proyectos
								</Link>
							</div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* upcoming-project-item */}
			      <div className="col-lg-12">
			        <div className="ltn__upcoming-project-item">
			          <div className="row">
			            <div className="col-lg-7">
			              <div className="ltn__upcoming-project-img">
			                <img src={publicUrl+"assets/img/product-3/residencial.jpg"} alt="#" />
			              </div>
			            </div>
			            <div className="col-lg-5 section-bg-1">
			              <div className="ltn__upcoming-project-info ltn__menu-widget">
			                <h6 className="ltn__secondary-color">Sobre Proyectos</h6>
			                <h1>DEPARTAMENTOS RESIDENCIALES</h1>
			                <p>Construcción y diseño de departamentos residenciales.</p>
							<div className="ltn__button-area mt-30">
								<Link to="/portfolio" className="theme-btn-1 btn">
									<i className="fas fa-arrow-right" />
									Ver Proyectos
								</Link>
							</div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* upcoming-project-item */}
			      <div className="col-lg-12">
			        <div className="ltn__upcoming-project-item">
			          <div className="row">
			            <div className="col-lg-7">
			              <div className="ltn__upcoming-project-img">
			                <img src={publicUrl+"assets/img/product-3/impermeabilizacion.png"} alt="#" />
			              </div>
			            </div>
			            <div className="col-lg-5 section-bg-1">
			              <div className="ltn__upcoming-project-info ltn__menu-widget">
			                <h6 className="ltn__secondary-color">Sobre Proyectos</h6>
			                <h1>PLAZA VALLE DON CAMILO EDO DE MEX.g Projects</h1>
			                <p>En este proyecto realizamos la impermeabilización de esta plaza.</p>
							<div className="ltn__button-area mt-30">
								<Link to="/portfolio" className="theme-btn-1 btn">
									<i className="fas fa-arrow-right" />
									Ver Proyectos
								</Link>
							</div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  */}
			    </div>
			  </div>
			</div>
        }
}

export default UpcomingProductV1