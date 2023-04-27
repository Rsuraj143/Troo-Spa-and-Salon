import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Error404component from '../../Components/Error404page/Error404component'

const Errorpage = () => {
  return (
    <div>
      <Header/>
      <Error404component/>

      <Footer />
    </div>
  )
}

export default Errorpage