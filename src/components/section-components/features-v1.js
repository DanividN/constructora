import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class FeaturesV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = this.props.customClass ? this.props.customClass : "";

    return (
      <div className={customClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Nuestros Servicios
                </h6>
                <h1 className="section-title">Nuestro Enfoque Principal</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__custom-gutter--- justify-content-center go-top">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/24.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Obra Civil</Link>
                  </h3>
                  <p>
                    Desarrollamos y ejecutamos proyectos de construcción con
                    alta calidad, asesorando en diseños de planos y materiales
                    de construcción.
                  </p>
                  <Link className="ltn__service-btn" to="/service-details">
                    Conocer Más <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                <div className="ltn__feature-icon">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/25.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Carpintería</Link>
                  </h3>
                  <p>
                    Desarrollamos y ejecutamos proyectos de carpintería con alta
                    calidad, asesorando en diseños de planos y materiales de
                    construcción.
                  </p>
                  <Link className="ltn__service-btn" to="/service-details">
                    Conocer Más <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/26.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Impermeabilización</Link>
                  </h3>
                  <p>
                    Desarrollamos y ejecutamos proyectos de impermeabilización
                    de alta calidad, asesorando en materiales de construcción.
                  </p>
                  <Link className="ltn__service-btn" to="/service-details">
                    Conocer Más
                    <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesV1;
