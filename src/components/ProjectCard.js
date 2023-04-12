import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="rounded-lg mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <a href={project.url} className="text-blue-500 hover:text-blue-700">
        View project
      </a>
    </div>
  );
}

export default ProjectCard;
