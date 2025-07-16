import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", interest: "", message: "" });
          setSubmitted(false);
        }, 3000);
      } else {
        console.error("Form submission failed");
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <section className="contact-us" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you. Get in touch with our team today.</p>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <h3>Schedule Your Service</h3>
            <p>Fill out the form below and our team will contact you shortly</p>

            {submitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>Your message has been sent successfully!</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest">Interest Of Service</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                >
                  <option value="">Select a service</option>
                  <option value="data-processing">
                    Data Processing & Storage
                  </option>
                  <option value="server-infrastructure">
                    Server Infrastructure
                  </option>
                  <option value="cloud-solutions">
                    Cloud Computing Solutions
                  </option>
                  <option value="consulting">Consulting & Advisory</option>
                  <option value="training">Training Programs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-header">
                <h3>Contact Information</h3>
                <p>We will contact you shortly after receiving your message</p>
              </div>

              <div className="info-details">
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Phone</h4>
                    <p>+91-9348622685 / +91-9556555762</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <p>goldenindustrialdataanalysis@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Address</h4>
                    <p>
                      Plot No-379/8, Lane 3, Kharavela Complex, Alginia,
                      Bhubaneswar (Odisha) 751019
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 9am - 6pm</p>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119271.7592752406!2d85.76329549999999!3d20.29605875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ1LjgiTiA4NcKwNDUnNDkuOCJF!5e0!3m2!1sen!2sin!4v1691687248477!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="container">
          <p>© 2023 Golden Industrial Data Analysis Private Ltd</p>
        </div>
      </footer>
    </section>
  );
};

export default ContactUs;
