function Skills() {
  const skills = [
    'React.js', 'Node.js', 'Python', 'Django',
    'MongoDB', 'Express', 'HTML', 'CSS', 'JavaScript', 'Git & GitHub'
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>My Skills</h2>
      <ul style={{ paddingLeft: '1.5rem', marginTop: '0' }}>
        {skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </div>
  );
}

export default Skills;