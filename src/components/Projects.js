import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-card">
        <h3>Banking Dashboard</h3>
        <p>Developed a modern banking dashboard using React.js and Material-UI to provide users with real-time data visualization of transactions and account details.</p>
      </div>
      <div className="project-card">
        <h3>Responsive Web App</h3>
        <p>Created a fully responsive web application using React and Bootstrap, with optimized performance and mobile-first design principles.</p>
      </div>
    </div>
  );
}

export default Projects;
