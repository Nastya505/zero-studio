import React from 'react'
import Projects from '../../components/projects/projects'
import Feedback from '../../components/feedback/feedback'
import MainTitleInPage from '../../components/title-in-page/main-title-in-page'
import { useTranslation } from 'react-i18next'

const ProjectsPage = () => {
    const {t} = useTranslation();

  return (
    <div className='container'>
        <MainTitleInPage title={t("projects_title")} />
        <Projects/>
        <Feedback/>
    </div>
  )
}

export default ProjectsPage