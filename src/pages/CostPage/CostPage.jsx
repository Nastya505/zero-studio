import React from 'react'
import Cost from '../../components/cost/cost'
import Feedback from '../../components/feedback/feedback'
import MainTitleInPage from '../../components/title-in-page/main-title-in-page'

import { useTranslation } from 'react-i18next'

const CostPage = () => {
  const {t} =useTranslation();

  return (
    <div className="container">

        <MainTitleInPage title={t("price_title")}/>
        <Cost/>
      
        <Feedback/>
    </div>
  )
}

export default CostPage