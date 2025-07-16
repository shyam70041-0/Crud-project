import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Predictive Analytics",
      description:
        "Our predictive analytics services leverage historical data and advanced machine learning algorithms to forecast future trends, customer behaviours, and business outcomes. Armed with these insights, you can make proactive decisions and stay ahead of the competition.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Business Intelligence (BI) Solutions",
      description:
        "Our BI solutions provide you with the tools to gain real-time insights into your business operations. We help you collect, analyze, and visualize your data, enabling you to make informed decisions that optimize performance and drive long-term growth.",
      icon: "fas fa-lightbulb",
    },
    {
      title: "Data Integration & Management",
      description:
        "We understand the complexity of managing diverse data sources. Our team ensures seamless data integration across platforms, ensuring that your data is accurate, accessible, and easily managed. With a streamlined data management strategy, your business can eliminate silos and maximize efficiency.",
      icon: "fas fa-database",
    },
    {
      title: "Custom Analytics Solutions",
      description:
        "Every business has unique challenges and goals. Our custom analytics services are tailored to meet your specific needs, whether it's optimizing processes, improving customer retention, or driving revenue growth. We work closely with you to develop solutions that align with your vision and objectives.",
      icon: "fas fa-cogs",
    },
    {
      title: "Data Analytics & Visualization",
      description:
        "We help you make sense of your data through detailed analytics and interactive visualizations. By transforming complex data into clear, easily interpretable charts, graphs, and dashboards, we enable your team to make smarter, data-driven decisions with confidence.",
      icon: "fas fa-chart-pie",
    },
    {
      title: "Data Governance and Security",
      description:
        "Ensuring the quality, privacy and compliance of data, especially with regulations like GDPR. Implementing data security practices and protecting sensitive information.",
      icon: "fas fa-shield-alt",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We help you make sense of your data through detailed analytics and
            interactive visualizations. By transforming complex data into clear,
            easily interpretable charts, graphs, and dashboards, we enable your
            team to make smarter, data-driven decisions with confidence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="data-driven-section">
          <div className="data-driven-content">
            <div className="data-driven-text">
              <h3>Data-Driven Success</h3>
              <p>
                Our commitment to data-driven decision-making means that every
                recommendation, insight, and strategy is based on solid evidence
                and analytics. We focus on delivering solutions that lead to
                measurable improvements, whether it's enhancing operational
                efficiency, improving customer satisfaction, or boosting
                revenue.
              </p>
            </div>
            <div className="data-driven-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
