import React from 'react';
import '@styles/components/website/Team.css';

function Team() {
  const teamMembers = [
    { name: 'Winnode', position: 'Software Engineering', image: '/assets/tim/win.jpg' },
    { name: 'Bang Pateng', position: 'Manager Community', image: '/assets/tim/pateng.jpg' },
    { name: 'MDP', position: 'Community Support', image: '/assets/tim/mdp.jpg' },
  ];

  return (
    <section className="team-section">
      <h2>Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
