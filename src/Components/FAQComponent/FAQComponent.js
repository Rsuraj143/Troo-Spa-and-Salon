import React from 'react'
import "./FAQComponent.css"
import { Link } from 'react-router-dom'

const FAQComponent = () => {
  return (
    <section class="troo-da-faq-section" id="troo-da-faq-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="troo-tile">
            <span>Our faq’s</span>
            <h2>Most common asked questions by our clients</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  What is the right spa for me?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Do they offer spa treatments for men?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Do they offer couples treatments?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading4">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                  For a massage, should I take all my clothes off?
                </button>
              </h2>
              <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-heading4"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading5">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse5">
                  Should I talk during my treatment?
                </button>
              </h2>
              <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading6">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                  What if I fall asleep during a treatment?
                </button>
              </h2>
              <div id="flush-collapse6" class="accordion-collapse collapse" aria-labelledby="flush-heading6"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-md-6">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading7">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                  What is the right spa for me?
                </button>
              </h2>
              <div id="flush-collapse7" class="accordion-collapse collapse" aria-labelledby="flush-heading7"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading8">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                  Do they offer spa treatments for men?
                </button>
              </h2>
              <div id="flush-collapse8" class="accordion-collapse collapse" aria-labelledby="flush-heading8"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading9">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9">
                  Do they offer couples treatments?
                </button>
              </h2>
              <div id="flush-collapse9" class="accordion-collapse collapse" aria-labelledby="flush-heading9"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading10">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse10" aria-expanded="false" aria-controls="flush-collapse10">
                  For a massage, should I take all my clothes off?
                </button>
              </h2>
              <div id="flush-collapse10" class="accordion-collapse collapse" aria-labelledby="flush-heading10"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading11">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse11">
                  Should I talk during my treatment?
                </button>
              </h2>
              <div id="flush-collapse11" class="accordion-collapse collapse" aria-labelledby="flush-heading11"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading12">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse12" aria-expanded="false" aria-controls="flush-collapse12">
                  What if I fall asleep during a treatment?
                </button>
              </h2>
              <div id="flush-collapse12" class="accordion-collapse collapse" aria-labelledby="flush-heading12"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="faq-btom-txt">
            <h4>Have you more questions in mind? <Link href="#">View more questions</Link></h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FAQComponent