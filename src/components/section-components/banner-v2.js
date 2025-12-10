import  { Component } from "react";

class BannerV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
        <div className="ltn__slider-11-inner">
          <div className="ltn__slider-11-active">
            {/* slide-item */}
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
              <div className="ltn__slide-item-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home" />
                            </span>{" "}
                            Constructora
                          </h6>
                          <h1 className="slide-title animated ">
                            Proyectos <br />y Construcción <br />
                            <span>EDISA</span> S.A. de C.V.
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              En Construcciones EDISA, nos dedicamos a la
                              excelencia en cada proyecto que emprendemos. Somos
                              una empresa con sede en Lerma de Villada, México.
                              Estamos comprometidos con la creación, desarrollo
                              y comercialización de proyectos de construcción
                              cuyo principal objetivo es brindar a los clientes
                              una mejor calidad de vida en el sector público y
                              privado. Contamos con profesionales y técnicos
                              altamente experimentados para el desarrollo de los
                              diferentes tipos de proyectos sean edificios
                              industriales, comerciales y de apartamentos;
                              vivienda residencial y popular...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img
                          src={publicUrl + "assets/img/slider/cocinas.jpg"}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider-sticky-icon */}
          <div className="slider-sticky-icon-2">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerV2;
