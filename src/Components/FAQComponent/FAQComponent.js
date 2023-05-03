import React from "react";
import "./FAQComponent.css";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

const FAQComponent = () => {
  return (
    <section className="troo-da-faq-section" id="troo-da-faq-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="troo-tile">
              <span>Our faq’s</span>
              <h2>Most common asked questions by our clients</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is the right spa for me?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Do they offer spa treatments for men?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Do they offer couples treatments?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  For a massage, should I take all my clothes off?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Should I talk during my treatment?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  What if I fall asleep during a treatment?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="col-md-6">
            <Accordion>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  What is the right spa for me?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Do they offer spa treatments for men?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  Do they offer couples treatments?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  For a massage, should I take all my clothes off?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  Should I talk during my treatment?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  What if I fall asleep during a treatment?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="faq-btom-txt">
              <h4>
                Have you more questions in mind?
                <Link to="/Home/FAQ">View more questions</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
