import React from 'react';
import { Button, Result } from 'antd';
import { useTranslation } from "react-i18next";

const Doashboard = (props) => {
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };
  return (


    <div className="wapper-main">
      <h1>{t("create")}</h1>



    </div>

  );
}


export default Doashboard;
