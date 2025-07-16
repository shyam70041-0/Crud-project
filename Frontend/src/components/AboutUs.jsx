import React from "react";
import "./AboutUs.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Learn more about our company and values</p>
        </div>

        <div className="about-content">
          <div className="about-left">
            <div className="about-card">
              <h3>Who Are We?</h3>
              <p>
                We are a data-driven company specializing in turning complex
                data into clear, actionable insights. Our mission is to help
                businesses make informed decisions, optimize performance, and
                stay ahead in a competitive landscape.
              </p>
              <p>
                Golden Industrial Data Analysis Private Ltd is a company
                committed to providing insights that drive smarter decisions and
                greater business outcomes. With our advanced data analytics
                services, we empower businesses to harness the power of their
                data, uncover hidden trends, and predict future opportunities.
                We provide comprehensive software support and maintenance
                services. Our core focus is on delivering high-quality solutions
                in the fields of data science.
              </p>
            </div>

            <div className="about-values">
              <div className="value-card">
                <div className="value-icon">✓</div>
                <div className="value-content">
                  <h4>Tailored Solutions</h4>
                  <p>
                    We understand that every business is unique, and we provide
                    solutions that fit your specific challenges and goals.
                  </p>
                </div>
              </div>

              <div className="value-card">
                <div className="value-icon">✓</div>
                <div className="value-content">
                  <h4>Results-Driven</h4>
                  <p>
                    Our focus is on helping you make data-driven decisions that
                    lead to measurable results and sustained growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="why-choose">
              <h3>Why Choose Us?</h3>

              <div className="feature">
                <div className="feature-icon">
                  <div className="hexagon">E</div>
                </div>
                <div className="feature-content">
                  <h4>Expertise</h4>
                  <p>
                    Our team of experienced data scientists, analysts, and
                    engineers brings years of expertise across industries.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <div className="hexagon">T</div>
                </div>
                <div className="feature-content">
                  <h4>Advanced Tools</h4>
                  <p>
                    We leverage cutting-edge technology to ensure you get the
                    most accurate and relevant insights.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <div className="hexagon">S</div>
                </div>
                <div className="feature-content">
                  <h4>Trillovard Solutions</h4>
                  <p>
                    Our innovative approach delivers customized solutions that
                    address your unique business challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3>Let's unlock the power of your data</h3>
            <p>
              Contact us today and see how we can help your business thrive in a
              data-driven world.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
