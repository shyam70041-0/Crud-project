import React from "react";
import "./BoardMembers.css";

const BoardMembers = () => {
  const members = [
    {
      name: "Anshumala",
      position: "Board Member",
      image: "https://www.gidapl.com/images/team-1.jpg",
    },
    {
      name: "Manorama Kumari",
      position: "Director",
      image: "https://www.gidapl.com/images/team-2.jpg",
    },
    {
      name: "Sanghamitra Satpathy",
      position: "Director",
      image: "https://www.gidapl.com/images/team-3.jpg",
    },
    {
      name: "Soumya Kanta",
      position: "Board Member",
      image: "https://www.gidapl.com/images/team-4.jpg",
    },
    {
      name: "Subani Mishra",
      position: "Board Member",
      image: "https://www.gidapl.com/images/team-5.jpg",
    },
  ];

  return (
    <section id="board" className="board-members">
      <div className="container">
        <div className="section-title">
          <h2>Our Board Members</h2>
          <p>Meet our experienced leadership team</p>
        </div>

        <div className="members-grid">
          {members.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
