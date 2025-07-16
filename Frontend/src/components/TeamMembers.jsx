import React from "react";
import "./TeamMembers.css";

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Dilip Kumar Mallick",
      position: "Associate Data Analyst",
      image: "https://www.gidapl.com/images/team-6.jpeg",
    },
    {
      name: "Janendra Chandra Das",
      position: "Associate Data Analyst",
      image: "https://www.gidapl.com/images/team-7.jpeg",
    },
    {
      name: "Pushpamitra Manjhi",
      position: "Senior Data Analyst",
      image: "https://www.gidapl.com/images/team-8.jpeg",
    },
  ];

  return (
    <section id="team" className="team-members">
      <div className="container">
        <div className="section-title">
          <h2>Our Team Members</h2>
          <p>Meet our talented team of data professionals</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team-cta">
          <p>Join our talented team of data experts</p>
          <a href="#contact" className="btn btn-primary">
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
