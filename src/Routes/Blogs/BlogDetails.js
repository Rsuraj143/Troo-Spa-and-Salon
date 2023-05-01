import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import BlogDetailsComponent from '../../Components/BlogComponent/BlogDetailsComponent'
import useDocumentTitle from '../../PageTitle'

const BlogDetails = () => {
  useDocumentTitle("TRoo Spa | Blogs Details ")
  return (
    <div class="blogs-detail detail-pages">
      <Header/>
      <HeroGlobal/>
      <BlogDetailsComponent/>
      <Footer />
    </div>
  )
}

export default BlogDetails