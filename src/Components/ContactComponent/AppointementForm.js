import React from 'react'

const AppointementForm = () => {
  return (
    <section className="troo-da-contact-page-section" id="troo-da-contact-page-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="troo-contact">
            <div className="row">
              <div className="col-md-12">
                <div className="contact-form">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label for="inputFullName" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="FullName" placeholder="Full Name" />
                    </div>
                    <div className="col-md-6">
                      <label for="inputPhone" className="form-label">Phone No.</label>
                      <input type="number" className="form-control" id="inputPhone" placeholder="Phone No." />
                    </div>
                    <div className="col-md-6">
                      <label for="inputEmailAddress" className="form-label">Email Address</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder="Email Address" />
                    </div>
                    <div className="col-md-6">
                      <label for="inputService" className="form-label">Type of Service</label>
                      <select id="inputService" className="form-select">
                        <option selected>Select...</option>
                        <option>...</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label for="inputDate" className="form-label">Date</label>
                      <input type="Date" className="form-control" id="inputDate" placeholder="22/12/2022" />
                    </div>
                    <div className="col-md-6">
                      <label for="inputTime" className="form-label">Time</label>
                      <input type="Time" className="form-control" id="inputTime" placeholder="10:00 AM" />
                    </div>

                    <div className="col-md-12">
                      <label for="inputMessage" className="form-label">Your Message</label>
                      <textarea name="Your Message" id="YourMessage" cols="30" rows="10"
                        placeholder="Your Message"></textarea>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">Send a Message</button>
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