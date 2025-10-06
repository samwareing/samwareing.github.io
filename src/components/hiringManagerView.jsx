import React, { useState, useRef } from "react";
import cvData from "../data/cvData.json";

function HiringManagerView() {
  const [expandedCard, setExpandedCard] = useState(null);
  const cardsContainerRef = useRef(null);

  const handleCardClick = (cardName) => {
    if (expandedCard === cardName) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardName);

      // Scroll the card to the top of the container
      setTimeout(() => {
        const cardElement = document.querySelector(
          `[data-card-name="${cardName}"]`
        );
        if (cardElement && cardsContainerRef.current) {
          const containerTop = cardsContainerRef.current.offsetTop;
          const cardTop = cardElement.offsetTop;
          const scrollTop = cardTop - containerTop;

          cardsContainerRef.current.scrollTo({
            top: scrollTop,
            behavior: "smooth",
          });
        }
      }, 100); // Small delay to ensure the card has expanded
    }
  };

  const formatCommandOutput = (commandName) => {
    const data = cvData[commandName];

    if (!data) {
      return "Command not found.";
    }

    switch (commandName) {
      case "about":
        return (
          <div>
            <p>
              <strong>Location:</strong> {data.location}
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={cvData["contact"].github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cvData["contact"].github}
              </a>
            </p>
            <p>{data.summary}</p>
          </div>
        );

      case "education":
        return (
          <div>
            {data.map((edu, index) => (
              <div key={index} className="mb-3">
                <h5>{edu.degree}</h5>
                <p>
                  <strong>{edu.institution}</strong> - {edu.period}
                </p>
                <p>
                  {edu.location} | Grade: {edu.grade}
                </p>
                {edu.department && (
                  <p>
                    <em>{edu.department}</em>
                  </p>
                )}
              </div>
            ))}
          </div>
        );

      case "experience":
        return (
          <div>
            {data.map((exp, index) => (
              <div key={index} className="mb-4">
                <h5>{exp.title}</h5>
                <p>
                  <strong>{exp.company}</strong> - {exp.period}
                </p>
                <p>{exp.location}</p>
                <ul>
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case "skills":
        return (
          <div>
            <div className="mb-3">
              <h5>Programming Languages & Databases</h5>
              <ul>
                {data.programmingLanguagesAndDatabases.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="mb-3">
              <h5>Technologies & Libraries</h5>
              <ul>
                {data.technologiesAndLibraries.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="mb-3">
              <h5>Methodologies</h5>
              <ul>
                {data.methodologies.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "training":
        return (
          <div>
            {data.map((org, index) => (
              <div key={index} className="mb-4">
                <h5>{org.organization}</h5>
                <ul>
                  {org.courses.map((course, courseIndex) => (
                    <li key={courseIndex}>
                      <strong>{course.name}</strong> - {course.date}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case "misc":
        return (
          <div>
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );

      case "references":
        return <p>{data}</p>;

      default:
        return <p>No information available.</p>;
    }
  };

  const commands = [
    { name: "about", description: "Professional summary" },
    {
      name: "experience",
      description: "Professional work experience and achievements",
    },
    { name: "skills", description: "Technical skills and proficiencies" },
    {
      name: "training",
      description: "Professional training and certifications",
    },
    {
      name: "education",
      description: "Educational background and qualifications",
    },
    { name: "misc", description: "Personal interests and hobbies" },
    { name: "references", description: "Information about references" },
  ];

  return (
    <div className="hiring-manager-view">
      <div className="name-section">
        <h3>{cvData["about"].name}</h3>
        <h4>{cvData["about"].title}</h4>
        <p>
          <a href={`mailto:${cvData["contact"].email}`}>
            {cvData["contact"].email}
          </a>
        </p>
      </div>
      <div className="cards-container" ref={cardsContainerRef}>
        {commands.map((command) => (
          <div
            key={command.name}
            data-card-name={command.name}
            className={`cv-card ${
              expandedCard === command.name ? "expanded" : ""
            }`}
            onClick={() => handleCardClick(command.name)}
          >
            <div className="card-header">
              <h4 className="card-title">{command.name}</h4>
              <p className="card-description">{command.description}</p>
            </div>
            {expandedCard === command.name && (
              <div className="card-content">
                {formatCommandOutput(command.name)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HiringManagerView;
