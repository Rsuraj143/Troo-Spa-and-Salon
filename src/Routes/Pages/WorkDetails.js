import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'

import WorkComponent3 from '../../Components/WorkComponent/WorkComponent3'
import WorkDetailsComponent from '../../Components/WorkComponent/WorkDetailsComponent'

const WorkDetails = () => {
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