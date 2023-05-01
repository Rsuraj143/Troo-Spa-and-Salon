import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'

import WorkComponent3 from '../../Components/WorkComponent/WorkComponent3'
import WorkDetailsComponent from '../../Components/WorkComponent/WorkDetailsComponent'
import useDocumentTitle from '../../PageTitle'

const WorkDetails = () => {
  useDocumentTitle("TRoo Spa | Work Details ")
  return (
    <div>
      <Header/>
      <HeroGlobal/>
      <WorkDetailsComponent/>
      <WorkComponent3/>
      <Footer />
    </div>
  )
}

export default WorkDetails