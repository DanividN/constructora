import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { BrainCircuit, HandPlatter, HeartHandshake, ShieldCheck } from 'lucide-react';

class Neighbour extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="neighbour-area section-bg-1 pt-118 pb-120">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h1 className="section-title text-center">Valores</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
			          <div className="row">
			            <div className="col-lg-6">
			              <div id="accordion_2">
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
			                    
								  <span
									style={{
									backgroundColor: "#063999",
									padding: "15px",
									marginRight: "20px",
									}}
								>
									<BrainCircuit
									style={{
										width: "20px",
										height: "20px",
										color: "white"
									}}
									/>
								</span>
								Innovación
			                  </h6>
			                  <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
			                    <div className="card-body">
			                      <p>Impulsamos el desarrollo de nuevas tecnologías y promovemos la mejora continua.</p>
			                    </div>
			                  </div>
			                </div>
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="false"> 
			                   <span
									style={{
									backgroundColor: "#063999",
									padding: "15px",
									marginRight: "20px",
									}}
								>
									<HeartHandshake 
									style={{
										width: "20px",
										height: "20px",
										color: "white"
									}}
									/>
								</span> Compromiso
			                  </h6>
			                  <div id="faq-item-2-2" className="collapse show---" data-bs-parent="#accordion_2">
			                    <div className="card-body">
			                      <p>Con el desarrollo personal y profesional de nuestros empleados, fomentando un ambiente de trabajo respetuoso y el trabajo en equipo.</p>
			                    </div>
			                  </div>
			                </div>                          
			              </div>                                
			            </div>
			            <div className="col-lg-6">
			              <div id="accordion_3">
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-3-4" aria-expanded="false">
			                     <span
									style={{
									backgroundColor: "#063999",
									padding: "15px",
									marginRight: "20px",
									}}
								><ShieldCheck
								 style={{
										width: "20px",
										height: "20px",
										color: "white"
									}}
									/>
								</span> Calidad
			                  </h6>
			                  <div id="faq-item-3-4" className="collapse" data-bs-parent="#accordion_3">
			                    <div className="card-body">
			                    <p>Implementada en la entrega del proyecto, superando las expectativas de nuestros clientes.</p>
			                    </div>
			                  </div>
			                </div>
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-3-5" aria-expanded="false">
			                    <span
									style={{
									backgroundColor: "#063999",
									padding: "15px",
									marginRight: "20px",
									}}
								>
									<HandPlatter  
									style={{
										width: "20px",
										height: "20px",
										color: "white"
									}}
									/>
								</span>Servicio
			                  </h6>
			                  <div id="faq-item-3-5" className="collapse" data-bs-parent="#accordion_3">
			                    <div className="card-body">
			                      <p>Nos centramos en las necesidades del cliente, cumpliendo con las responsabilidades asignadas con la mayor satisfacción y ofreciendo una atención individualizada a cada cliente.</p>
			                    </div>
			                  </div>
			                </div>
			              </div>                                
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
				{/* poryectos */}
				<div className="row mt-4">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h1 className="section-title text-center">Proyectos</h1>
			        </div>
			      </div>
				  <div className="row">
					 <div className="col-lg-12">
						<p>
							Hemos completado una amplia gama de proyectos, desde residenciales hasta comerciales e industriales. Destacamos por nuestra capacidad para llevar a cabo proyectos complejos de alto perfil.
						</p>
					 </div>
					</div>
				</div>
				{/* equipo directivo */}
				<div className="row mt-4">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h1 className="section-title text-center">Equipo Directivo</h1>
			        </div>
			      </div>
				  <div className="row">
					 <div className="col-lg-12">
						<p>
							Hemos completado una amplia gama de proyectos, desde residenciales hasta comerciales e industriales. Destacamos por nuestra capacidad para llevar a cabo proyectos complejos de alto perfil.
						</p>
						<div className="row img-responsive ">
							<img src={publicUrl+"assets/img/others/equipo.png"} alt="equipo" className="img-fluid w-auto mx-auto d-block" />
						</div>
					 </div>
					</div>
				</div>
			  </div>
			</div>
        }
}

export default Neighbour