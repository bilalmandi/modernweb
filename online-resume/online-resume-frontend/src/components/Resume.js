import React, { useEffect, useState } from 'react';

const Resume = () => {
  const [overview, setOverview] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then((res) => res.json())
      .then((data) => setOverview(data));

    fetch('http://localhost:8000/getEdu')
      .then((res) => res.json())
      .then((data) => setEducation(data));

    fetch('http://localhost:8000/getExp')
      .then((res) => res.json())
      .then((data) => setExperience(data));
  }, []);

  return (
    <div>
      <h1>{overview.name}</h1>
      <p>{overview.summary}</p>

      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.degree} from {edu.school} ({edu.year})
          </li>
        ))}
      </ul>

      <h2>Experience</h2>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            {exp.title} at {exp.company} ({exp.years})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
