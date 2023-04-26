import React from 'react'
import "./HeroComponent.css"
import { Link } from 'react-router-dom'

const HeroGlobal = () => {
  return (
    <section class="troo-da-sub-page-section" id="troo-da-sub-page-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="sub-page-text">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link href="#">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">About</li>
              </ol>
            </nav>
            <h2>About us</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroGlobal