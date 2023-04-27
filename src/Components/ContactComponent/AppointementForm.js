import React from 'react'

const AppointementForm = () => {
  return (
    <section class="troo-da-contact-page-section" id="troo-da-contact-page-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="troo-contact">
            <div class="row">
              <div class="col-md-12">
                <div class="contact-form">
                  <form class="row g-3">
                    <div class="col-md-6">
                      <label for="inputFullName" class="form-label">Full Name</label>
                      <input type="text" class="form-control" id="FullName" placeholder="Full Name" />
                    </div>
                    <div class="col-md-6">
                      <label for="inputPhone" class="form-label">Phone No.</label>
                      <input type="number" class="form-control" id="inputPhone" placeholder="Phone No." />
                    </div>
                    <div class="col-md-6">
                      <label for="inputEmailAddress" class="form-label">Email Address</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="Email Address" />
                    </div>
                    <div class="col-md-6">
                      <label for="inputService" class="form-label">Type of Service</label>
                      <select id="inputService" class="form-select">
                        <option selected>Select...</option>
                        <option>...</option>
                      </select>
                    </div>

                    <div class="col-md-6">
                      <label for="inputDate" class="form-label">Date</label>
                      <input type="Date" class="form-control" id="inputDate" placeholder="22/12/2022" />
                    </div>
                    <div class="col-md-6">
                      <label for="inputTime" class="form-label">Time</label>
                      <input type="Time" class="form-control" id="inputTime" placeholder="10:00 AM" />
                    </div>

                    <div class="col-md-12">
                      <label for="inputMessage" class="form-label">Your Message</label>
                      <textarea name="Your Message" id="YourMessage" cols="30" rows="10"
                        placeholder="Your Message"></textarea>
                    </div>

                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">Send a Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AppointementForm