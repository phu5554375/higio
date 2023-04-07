import React, { useEffect, useState  } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";

import { useTranslation } from "react-i18next";
import Language from "./headerActions/Language";


import topimg1 from "../assets/img/CITYPNG21.png";
import topimg12 from "../assets/img/right-img.png";

import topimg13 from "../assets/img/si-glyph_connect-2 1.png";
import topimg14 from "../assets/img/carbon_chart-combo-stacked 1.png";
import topimg15 from "../assets/img/grommet-icons_technology 1.png";
import topimg16 from "../assets/img/eos-icons_cloud-computing-outlined 1.png";
import topimg17 from "../assets/img/uil_technology 1.png";
import topimg18 from "../assets/img/uil_technology 1.png";


import topimg19 from "../assets/img/01.png";
import topimg20 from "../assets/img/02.png";
import topimg21 from "../assets/img/03.png";
import topimg22 from "../assets/img/04.png";
import topimg23 from "../assets/img/05.png";
import topimg24 from "../assets/img/06.png";
import topimg25 from "../assets/img/07.png";
import topimg26 from "../assets/img/08.png";


import topimg27 from "../assets/img/903554_121666414663405_1017832377_o 1.png";
import topimg28 from "../assets/img/asas.png";

import topimg29 from "../assets/img/logo.png";
import topimg30 from "../assets/img/1 903 1.png";
import topimg31 from "../assets/img/partner-logo-vmware 3 1.png";
import topimg32 from "../assets/img/ProPartner_Default_Partner_Logo 2 1.png";
import topimg33 from "../assets/img/Screenshot 2023-01-09 091403 2 1.png";
import topimg34 from "../assets/img/ico-back-top.png";
import topimg35 from "../assets/img/pci 3 1.png";


import logo1 from "../assets/img/logo/4-2021-05783.jpg";
import logo2 from "../assets/img/logo/931b119cf710fb54746d5be0e258ac89-logo-momo.png";
import logo3 from "../assets/img/logo/1200px-GS25_bi_(2019).svg.png";
import logo4 from "../assets/img/logo/1415450_181827348686434_1047700518_o.jpg";
import logo5 from "../assets/img/logo/1629798473.png";
import logo6 from "../assets/img/logo/benh-vien-ung-buou-img.png";
import logo7 from "../assets/img/logo/CJ_Olivenetworks_Horizontal (ENG).png";
import logo8 from "../assets/img/logo/download (1).jpg";
import logo9 from "../assets/img/logo/download (2).jpg";
import logo10 from "../assets/img/logo/eEkf9U0kMys4HcZfGEsyKU2RexIra5jJ_1655689376____74e7e3ccd5bdf99952345e52ca12bdfb.png";
import logo11 from "../assets/img/logo/FamilyMart_logo.svg.png";
import logo12 from "../assets/img/logo/logo (1).png";
import logo13 from "../assets/img/logo/logo.png";
import logo14 from "../assets/img/logo/logo_tap_doan_hung_thinh.png";
import logo15 from "../assets/img/logo/logo-hoanmytanbinh.png";
import logo16 from "../assets/img/logo/logo-kbank.png";
import logo17 from "../assets/img/logo/Logo-Sabeco-Red.webp";
import logo18 from "../assets/img/logo/Logo-SaigonTourist-SL.webp";
import logo19 from "../assets/img/logo/logo-sendo_22379c86d6d04d809bfed4897a465d4d.webp";
import logo20 from "../assets/img/logo/logo-tiki-inkythuatso-01-24-09-30-33.jpg";
import logo21 from "../assets/img/logo/logo-vietabank.webp";
import logo22 from "../assets/img/logo/Mailinh.jpg";
import logo23 from "../assets/img/logo/Panasonic-logo.png";
import logo24 from "../assets/img/logo/Standard-Chartered-logo.png";
import logo25 from "../assets/img/logo/wordlogo.png";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6
};

const Common = (props) => {
  const { t, i18n } = useTranslation();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
    <div id="siteContainer">
    <header id="siteHeader" className="site-header fix-top">
      <div className="main-nav">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-siteHeaderMenuCollapse" aria-expanded="false"><i className="ion-navicon-round" /></button>
            <h1 className="navbar-brand"><img src={topimg29}/></h1>
          </div>
          <div id="bs-siteHeaderMenuCollapse" className="collapse navbar-collapse px-0">
            <div className="main-nav-container navbar-right clearfix">
              <ul className="main-menu-list">
                <li><a href="#aboutus">{t("menu1")}</a></li>
                <li><a href="#frontPage__SystemList">{t("menu2")}</a></li>
                <li><a href="#customer">{t("menu3")}</a></li>
                <li><a href="#contact">{t("menu4")}</a></li>
                <li><Language /> </li>
                  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="siteContent" className="isg-front-page">
      <div className="isg-system-intro ht-bgcover">
        <div className="container">
          <div className="isg-system-intro_wrapper">
            <div className="isg-intro-content">
              <h2 className="j-title">HI GIO Cloud Gen. 2</h2>
              <div className="j-subtitle">
                <div className="main-quote iblock">{t("toptitle")}</div>
                <p>{t("tophead")}</p>
              </div>
              {/* <div class="j-action">
              <a href="#" class="btn ht-btn-primary btn-rounded try-now-btn">Dùng thử miễn phí</a>
            </div> */}
            </div>
            <div className="isg-intro-video">
              {/* <div id="isgVideoTriggle" class="video-featured-image ht-bgcover" style="background-image: url('assets/img/isg-video-feature-preview.jpg');"><i class="ion-play"></i></div> */}
              <div className="isg-intro-video_wrapper">
                <div id="isgVideoWrap">
                  <img src={topimg1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section--fets">
        <div className="container ui-icon-blocks ui-blocks-h icons-lg">
          <div className="section-heading cente">
            <h2 className="heading center">{t("titleone")}</h2>
            <p className="paragraph">{t("title2")}</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 col-md-4">
              <div className="ui-icon-block">
                <h4 className="ui-icon-block__title">20+</h4>
                <p className="ui-icon-block__sub">{t("title3")}</p>
                
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="ui-icon-block">
                <h4 className="ui-icon-block__title">24/7/365</h4>
                <p className="ui-icon-block__sub">{t("title4")}</p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="ui-icon-block">
                <h4 className="ui-icon-block__title">04</h4>
                <p className="ui-icon-block__sub">{t("title5")}</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ui-icon-block">
                <h4 className="ui-icon-block__title">2000+</h4>
                <p className="ui-icon-block__sub">{t("title6")}</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ui-icon-block">
                <h4 className="ui-icon-block__title">+ 100</h4>
                <p className="ui-icon-block__sub">{t("title7")}</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ui-icon-block">
                <h4 className="ui-icon-block__title">+10</h4>
                <p className="ui-icon-block__sub">{t("title8")}</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ui-icon-block">
                <h4 className="ui-icon-block__title">99,99%</h4>
                <p className="ui-icon-block__sub">{t("title9")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="isg-front-preview" id="aboutus">
        <div className="container pos-rel">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="content-wrap">
                <div className="ht-title">
                  {t("menu1")}</div>
                <div className="ht-subtitle"> <b>{t("brandname")}</b> {t("title10")}<br />​
               <b> {t("brandname2")}</b> {t("title11")}</div>
              </div>
            </div>
            <div className="img-mockup">
              <img src={topimg12} className="fadeInRight animated" />
            </div>
          </div>
        </div>
      </div>
      <div id="frontPage__SystemList" className="isg-system-features isg-front-section">
        <div className="container">
          <div className="section-header section-header--front-page text-center">
            <div className="ht-title">
              {t("menu2")}</div>				
          </div>
          <div className="section-content">
            <div className="system-features-container">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4">
                  <div className="ui-icon-block">
                    <div className="ui-icon-block__title"><img src={topimg13} /></div>
                    <p className="ui-icon-block__sub">{t("title12")}​</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="ui-icon-block">
                    <div className="ui-icon-block__title"><img src={topimg14} /></div>
                    <p className="ui-icon-block__sub">{t("title13")}​</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="ui-icon-block">
                    <div className="ui-icon-block__title"><img src={topimg15} /></div>
                    <p className="ui-icon-block__sub">{t("title14")}​</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="ui-icon-block">
                    <div className="ui-icon-block__title"><img src={topimg16} /></div>
                    <p className="ui-icon-block__sub">{t("title15")}​</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="ui-icon-block">
                    <div className="ui-icon-block__title"><img src={topimg17} /></div>
                    <p className="ui-icon-block__sub">{t("title16")}​</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="ui-icon-block">
                    <div className="ui-icon-block__title"><img src={topimg18} /></div>
                    <p className="ui-icon-block__sub">{t("title17")}​</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="isg-register-company">
        <div className="container">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <div className="center-box text-center">
              <p className="s-subtitle">{t("title18")}
              </p>
            </div>
          </div>
        </div>			
      </div>
      <div className="isg-app-features isg-front-section">
        <div className="container">
          <div className="section-content">
            <div className="col-6 col-md-6">
              <div className="ui-icon-block">
                <div className="ui-icon-block__title"><img src={topimg19} /></div>
                <div className="ui-icon-block__sub">
                  <h3>HI GIO Public Cloud</h3>
                  <p>{t("title19")}</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="ui-icon-block">
                <div className="ui-icon-block__title"><img src={topimg20} /></div>
                <div className="ui-icon-block__sub">
                  <h3>HI GIO Private Cloud</h3>
                  <p>{t("title20")}</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="ui-icon-block">
                <div className="ui-icon-block__title"><img src={topimg21} /></div>
                <div className="ui-icon-block__sub">
                  <h3>HI GIO BaaS (Backup as a Service)</h3>
                  <p>{t("title21")}</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="ui-icon-block">
                <div className="ui-icon-block__title"><img src={topimg22} /></div>
                <div className="ui-icon-block__sub">
                  <h3>HI GIO DRaaS (Disaster Recovery as a Service)</h3>
                  <p>{t("title22")}</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="ui-icon-block">
                <div className="ui-icon-block__title"><img src={topimg23} /></div>
                <div className="ui-icon-block__sub">
                  <h3>HI GIO Network &amp; Security</h3>
                  <p>{t("title23")}</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="ui-icon-block">
                <div className="ui-icon-block__title"><img src={topimg24} /></div>
                <div className="ui-icon-block__sub">
                  <h3>HI GIO Kubernetes ({t("coming")})</h3>
                  <p>{t("title24")}</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="ui-icon-block">
                <div className="ui-icon-block__title"><img src={topimg25} /></div>
                <div className="ui-icon-block__sub">
                  <h3>HI GIO DBaaS ({t("coming")})</h3>
                  <p>{t("title25")}</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="ui-icon-block">
                <div className="ui-icon-block__title"><img src={topimg26} /></div>
                <div className="ui-icon-block__sub">
                  <h3>HI GIO Object Storage ({t("coming")})</h3>
                  <p>{t("title26")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="isg-front-khachhang" id="customer">
        <div className="container pos-rel">
          <div className="row">
          <Slider {...settings}>
          <div>
            <h3><img src={logo1} /></h3>
          </div>
          <div>
            <h3><img src={logo2} /></h3>
          </div>
          <div>
            <h3><img src={logo3} /></h3>
          </div>
          <div>
            <h3><img src={logo4} /></h3>
          </div>
          <div>
            <h3><img src={logo5} /></h3>
          </div>
          <div>
            <h3><img src={logo6} /></h3>
          </div>
          <div>
            <h3><img src={logo7} /></h3>
          </div>
          <div>
            <h3><img src={logo8} /></h3>
          </div>
          <div>
            <h3><img src={logo9} /></h3>
          </div>
          <div>
            <h3><img src={logo10} /></h3>
          </div>
          <div>
            <h3><img src={logo11} /></h3>
          </div>
          <div>
            <h3><img src={logo12} /></h3>
          </div>
          <div>
            <h3><img src={logo13} /></h3>
          </div>
          <div>
            <h3><img src={logo14} /></h3>
          </div>
          <div>
            <h3><img src={logo15} /></h3>
          </div>
          <div>
            <h3><img src={logo16} /></h3>
          </div>
          <div>
            <h3><img src={logo17} /></h3>
          </div>
          <div>
            <h3><img src={logo18} /></h3>
          </div>
          <div>
            <h3><img src={logo19} /></h3>
          </div>
          <div>
            <h3><img src={logo20} /></h3>
          </div>
          <div>
            <h3><img src={logo21} /></h3>
          </div>
          <div>
            <h3><img src={logo22} /></h3>
          </div>
          <div>
            <h3><img src={logo23} /></h3>
          </div>
          <div>
            <h3><img src={logo24} /></h3>
          </div>
          <div>
            <h3><img src={logo25} /></h3>
          </div>
        </Slider>
          </div>
        </div>
      </div>
      <div className="isg-front-khachhang">
        <div className="container pos-rel">
          <div className="section-header section-header--front-page text-center">
            <div className="ht-title">
            {t("title27")}</div>	
            <p>{t("title28")}</p>			
          </div>
          <div className="col-12 col-md-12">
            <div className="ui-icon-block">
              <div className="ui-icon-block__sub">
                <p>{t("title29")}</p>
              </div>
              <div className="ui-icon-block__title">
                <img src={topimg27} />
                <h5>{t("title30")}</h5>
                <p>{t("title33")}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12">
            <div className="ui-icon-block">
              <div className="ui-icon-block__sub">
                <p>{t("title31")}</p>
              </div>
              <div className="ui-icon-block__title">
                <img src={topimg28} />
                <h5>  {t("title32")}</h5>
                <p> {t("title34")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Site Footer */}
    <footer className="site-footer" id="contact">
      <div>
        <div className="container has-max-width-on-xs-screen py-28">
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <div className="site-footer_single-nav">
                <img src={topimg29} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <div className="site-footer_single-nav">
                <h4 className="nav-title text-uppercase">About Us</h4>
                <ul className="nav-list">
                  <li><a href="#">FPT Telecom</a></li>
                  <li><a href="#">IIJ GS Vietnam</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <div className="site-footer_single-nav">
                <h4 className="nav-title text-uppercase">Contact</h4>
                <ul className="nav-list">
                  <li><a href="#">1900 6973</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <div className="site-footer_single-nav">
                <h4 className="nav-title text-uppercase">Kết nối với chúng tôi</h4>
                <ul className="nav-list">
                  <li className="d-iblock mr-8"><a href="#" target="_blank"><img src={topimg30} alt="" width={24} height={24} /></a></li>
                  <li className="d-iblock mr-8"><a href="#" target="_blank"><img src={topimg31} alt="" width={40} height={24} /></a></li>
                  <li className="d-iblock mr-8"><a href="#" target="_blank"><img src={topimg32} alt="" width="̀50" height={24} /></a></li>
                  <li className="d-iblock mr-8"><a href="#" target="_blank"><img src={topimg33} alt="" width={40} height={24} /></a></li>
                  <li />
                  <li className="legal-icon-item mt-8"><a href="#" target="_blank"><img src={topimg35} alt="" width="auto" height={40} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
         <img src={topimg34} />
        </button>
      )}
    </footer>
  </div>
  );
};

export default Common;
