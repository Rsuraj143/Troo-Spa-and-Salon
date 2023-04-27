import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import GalleryComponent2 from '../../Components/GallerryComponent/GalleryComponent2'

const Gallery = () => {
  return (
    <div class="photo-gallery">
      <Header/>
      <HeroGlobal/>
      <GalleryComponent2/>
      <Footer/>
    </div>
  )
}

export default Gallery