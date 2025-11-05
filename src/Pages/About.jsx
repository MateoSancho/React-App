function About() {
  const teamMembers = [
    {
      name: "Mateo",
      role: "Head Barista",
      bio: "Passionate about both coffee. Believes the perfect espresso shot and Messi are a religion."
    },
    {
      name: "Anton", 
      role: "Barista",
      bio: "Loves creating beautiful latte art. Specializes in cappuccino foam designs and has bad dressing."
    },
  ];

  return (
    <div className="page-content">
      <h1>About Our Coffee Shop</h1>
      
      <section className="project-description">
        <h2>Café Shop</h2>
        <p>
          Welcome to Café Shop - where great coffee meets great people. 
          Our order management system helps our baristas efficiently manage customer orders, 
          track preparation status, and ensure every drink is made to perfection.
        </p>
      </section>

      <section className="team-section">
        <h2>Our Barista Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-description">
        <h2>Our Coffee Philosophy</h2>
        <p>
          We source only the finest ethically-grown coffee beans and prepare each drink 
          with precision and care. From espresso to pour-over, every cup tells a story.
        </p>
        <p>
          Visit us at: 123 Code Street, Tech City | Open 7am-7pm daily
        </p>
      </section>
    </div>
  );
}

export default About;