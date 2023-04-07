import React from 'react';
import { useTranslation } from "react-i18next";
import vietnam from "../../assets/img/VNM.png";
import usa from "../../assets/img/USA.png";
const lngs = [
  { code: "vn", native: <img src={vietnam}/> },
  { code: "en", native: <img src={usa}/> },
];

const Language = (props) => {
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };
  return (

    <div className="chart-tq language">
        {lngs.map((lng, i) => {
          const { code, native } = lng;
          return  <button className='lang-btn' onClick={() => handleTrans(code)}>{native}</button>;
        })}
      
    </div>
   
  );
}


export default Language;
