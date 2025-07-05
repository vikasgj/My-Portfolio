function Projects() {
  const projects = [
    {
      name: 'E-Commerce Store',
      description: 'MERN app with cart, login, and payments.',
      link: 'https://github.com/yourusername/ecommerce'
    },
    {
      name: 'Cricket Stats Site',
      description: 'Django-powered stats tracker.',
      link: 'https://github.com/yourusername/crickstats'
    }
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>Projects</h2>
      <ul style={{ paddingLeft: '1.5rem', marginTop: '0' }}>
        {projects.map((proj, index) => (
          <li key={index}>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;