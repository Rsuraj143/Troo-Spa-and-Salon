import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import BlogComponent2 from '../../Components/BlogComponent/BlogComponent2'
import useDocumentTitle from '../../PageTitle'

const Blogs = () => {
  useDocumentTitle("TRoo Spa | Blogs ")
  return (
    <div class="blogs">
      <Header/>
      <HeroGlobal/>
      <BlogComponent2/>
      <Footer/>
    </div>
  )
}

export default Blogs