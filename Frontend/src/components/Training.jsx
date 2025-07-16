import React from "react";
import "./Training.css";

const Training = () => {
  return (
    <section className="training" id="training">
      <div className="container">
        <h2 className="section-title">Education & Training</h2>
        <p className="section-subtitle">
          Enhance your skills with our industry-relevant courses
        </p>

        <div className="training-grid">
          <div className="training-card">
            <div className="card-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Python Full Stack</h3>
            <p>
              Master frontend and backend development with Python frameworks
            </p>
            <ul className="course-topics">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js, Vue.js</li>
              <li>Django, Flask</li>
              <li>Database Management</li>
            </ul>
            <button className="enroll-btn">Enroll Now</button>
          </div>

          <div className="training-card">
            <div className="card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Data Science With Python</h3>
            <p>Become proficient in data analysis, visualization and ML</p>
            <ul className="course-topics">
              <li>Pandas, NumPy, SciPy</li>
              <li>Matplotlib, Seaborn</li>
              <li>Scikit-learn, TensorFlow</li>
              <li>Statistical Analysis</li>
            </ul>
            <button className="enroll-btn">Enroll Now</button>
          </div>

          <div className="training-card">
            <div className="card-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>AI & Machine Learning</h3>
            <p>Learn advanced AI algorithms and ML techniques</p>
            <ul className="course-topics">
              <li>Deep Learning</li>
              <li>Neural Networks</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
            </ul>
            <button className="enroll-btn">Enroll Now</button>
          </div>
        </div>

        <div className="training-features">
          <div className="feature">
            <i className="fas fa-certificate"></i>
            <h4>Industry Certification</h4>
            <p>Get certified with our recognized credentials</p>
          </div>

          <div className="feature">
            <i className="fas fa-user-tie"></i>
            <h4>Expert Instructors</h4>
            <p>Learn from professionals with real-world experience</p>
          </div>

          <div className="feature">
            <i className="fas fa-briefcase"></i>
            <h4>Career Support</h4>
            <p>Job placement assistance and career guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
