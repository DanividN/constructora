import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import Copyright from "./copyright";

class Footer_v1 extends Component {
  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL;
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "/assets/js/main.js";


    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "Footer logo";

    return (
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img
                        src={publicUrl + "assets/img/logo.png"}
                        alt="Logo"
						width="80px"
                      />
                    </div>
                  </div>
                  <p>Proyectos Y Construcción EDISA S.A DE C.V</p>
                </div>
              </div>
			  <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-menu-widget clearfix">
                    <h4 className="footer-title">Empresa</h4>
                    <div className="footer-menu go-top">
                      <ul>
                        <li>
                          <Link to="/">Inicio</Link>
                        </li>
                        <li>
                          <Link to="/shop">Proyectos</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contacto</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Dirección</h4>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-placeholder" />
                        </div>
                        <div className="footer-address-info">
                          <p>Lerma de Villada, Estado de México</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Contacto</h4>
                  <div className="footer-menu go-top">
                    <ul className="footer-contact-list">
                      <li>
                        <a
                          href="https://www.whatsapp.com/send?phone=+5252525252525"
                          title="Whatsapp"
                        >
                          <i className="fab fa-whatsapp" /> Contactar: +52 52
                          525 25 25
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <Social />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    );
  }
}

export default Footer_v1;
