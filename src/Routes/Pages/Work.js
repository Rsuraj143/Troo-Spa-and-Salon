import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import WorkComponent2 from '../../Components/WorkComponent/WorkComponent2'
import useDocumentTitle from '../../PageTitle'

const Work = () => {
  useDocumentTitle("TRoo Spa | Our Work's ")
  return (
    <div>
      <Header/>
      <HeroGlobal/>
      <WorkComponent2/>

      <Footer/>
    </div>
  )
}

export default Work