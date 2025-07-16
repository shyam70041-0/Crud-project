
import React from 'react';
import './OurProcess.css';
import backgroundImage from '../assets/mission_vision.png'; 

const OurProcess = () => {
  return (
    <section className="our-process" id="our-process">
      
      <div className="background-overlay">
        <div className="container">
          <h2>Our Process</h2>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-header">
                <div className="step-icon">1</div>
                <h3>Discovery & Assessment</h3>
              </div>
              <p>We start by understanding your business objectives, data sources, and current challenges. Our team conducts a thorough analysis to identify areas where data analytics can provide the most value.</p>
            </div>
            
            <div className="step">
              <div className="step-header">
                <div className="step-icon">2</div>
                <h3>Solution Design & Strategy</h3>
              </div>
              <p>Based on your needs, we develop a custom analytics strategy. Whether it's building predictive models, optimizing dashboards, or streamlining data processes, we create a tailored solution to help you achieve your goals.</p>
            </div>
            
            <div className="step">
              <div className="step-header">
                <div className="step-icon">3</div>
                <h3>Ongoing Support & Optimization</h3>
              </div>
              <p>Data analytics is an ongoing journey. We provide continuous support, monitoring, and optimization to ensure that your analytics systems remain effective and up-to-date as your business grows.</p>
            </div>
          </div>
          
          <div className="industries">
            <h3>Industries We Serve</h3>
            <div className="industry-grid">
              <div className="industry-card">
                <i className="fas fa-heartbeat industry-icon"></i>
                <h4>Healthcare</h4>
                <p>Enhancing patient care, improving operational efficiency, and predicting patient outcomes.</p>
              </div>
              
              <div className="industry-card">
                <i className="fas fa-shopping-cart industry-icon"></i>
                <h4>Retail</h4>
                <p>Optimizing inventory, personalizing customer experiences, and forecasting sales.</p>
              </div>
              
              <div className="industry-card">
                <i className="fas fa-chart-line industry-icon"></i>
                <h4>Finance</h4>
                <p>Detecting fraud, optimizing risk management, and improving financial forecasting.</p>
              </div>
              
              <div className="industry-card">
                <i className="fas fa-industry industry-icon"></i>
                <h4>Manufacturing</h4>
                <p>Streamlining production, improving quality control, and enhancing supply chain management.</p>
              </div>
              
              <div className="industry-card">
                <i className="fas fa-shopping-bag industry-icon"></i>
                <h4>E-commerce</h4>
                <p>Increasing conversions, personalizing marketing efforts, and improving customer satisfaction.</p>
              </div>
              
              <div className="industry-card">
                <i className="fas fa-bullhorn industry-icon"></i>
                <h4>Marketing & Advertising</h4>
                <p>Analyzing campaign effectiveness, segmenting audiences, and driving ROI.</p>
              </div>
            </div>
          </div>
          
          <div className="cta">
            <h3>Let's Unlock the Power of Your Data</h3>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </div>
      
      {/* Services section */}
      <div className="services" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-category">
              <h3>Data Processing and Storage</h3>
              <p>Offering services that support businesses in managing, analyzing, and securely storing data.</p>
            </div>
            
            <div className="service-category">
              <h3>High-Performance Server Infrastructure</h3>
              <p>Developing, designing, and maintaining efficient server systems for advanced data analysis and processing.</p>
            </div>
            
            <div className="service-category">
              <h3>Cloud Computing Solutions</h3>
              <p>Providing scalable and secure cloud services to manage, analyze, and store data for organizations.</p>
            </div>
            
            <div className="service-category">
              <h3>Consulting & Advisory Services</h3>
              <p>Expert guidance on server management, data processing, and optimization of analytics workflows.</p>
            </div>
            
            <div className="service-category">
              <h3>Server Management & Maintenance</h3>
              <p>Delivering backup, recovery, and cybersecurity solutions to ensure data integrity and availability.</p>
            </div>
            
            <div className="service-category">
              <h3>Data Centre Operations</h3>
              <p>Operating advanced data centers for high-speed data processing and analytics.</p>
            </div>
            
            <div className="service-category">
              <h3>Hardware & Software Acquisition</h3>
              <p>Procuring and operating systems necessary for delivering reliable analytics solutions.</p>
            </div>
            
            <div className="service-category">
              <h3>Third-Party Collaboration</h3>
              <p>Partnering with vendors to enhance capabilities in the field of data analytics.</p>
            </div>
            
            <div className="service-category">
              <h3>Client Training & Support</h3>
              <p>Helping clients maximize the use of analytics tools and infrastructure through dedicated support.</p>
            </div>
            
            <div className="service-category">
              <h3>Research & Development</h3>
              <p>Continuously improving server performance, data processing speed, and analytical accuracy.</p>
            </div>
            
            <div className="service-category">
              <h3>Subscription & Licensing</h3>
              <p>Providing proprietary software via flexible subscription based and licensing models.</p>
            </div>
            
            <div className="service-category">
              <h3>Custom Data Solutions</h3>
              <p>Entering into contracts with businesses, governments, and institutions to deliver tailored analytics services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;