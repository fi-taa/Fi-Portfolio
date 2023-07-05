import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/HeroSection";
import Link from "next/link";
import Web from "@/data/web";
import Graphics from "@/data/graphics";
import { useRouter } from "next/router";

const ProjectPreviewPage = () => {
  const router = useRouter();

  const handleDetail = (projectId) => {
    router.push(`/WebProjects/detail/${projectId}`);

  };
  

  const [selectedProject, setSelectedProject] = useState(Web[0]);
  const [renderedDescription, setRenderedDescription] = useState("");

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  useEffect(() => {
    setRenderedDescription("");

    let currentIndex = -1;
    const descriptionInterval = setInterval(() => {
      if (currentIndex >= selectedProject.description.length - 1) {
        clearInterval(descriptionInterval);
      } else {
        setRenderedDescription((prevDescription) => prevDescription + selectedProject.description[currentIndex]);
        currentIndex++;
      }
    }, 50);

    return () => {
      clearInterval(descriptionInterval);
    };
  }, [selectedProject]);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length <= 15) {
      return description;
    }
    return words.slice(0, 15).join(" ") + "...";
  };

  return (
    <div className="">
      <Hero />
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <p className="m-2">Welcome to the Projects page for Frontend Developers! Explore a diverse collection of curated projects to enhance your skills and ignite your passion for frontend development. From responsive layouts to stunning visual effects, find endless possibilities to challenge and inspire you. Happy coding!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Web.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md p-6 rounded-md flex flex-col hover:scale-105 transition-transform duration-500"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">
                {truncateDescription(project.description)}
              </p>
              <button onClick={()=>handleDetail(project.id)} className="bg-blue-500 text-white py-2 px-4 rounded-md self-end">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreviewPage;
