import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/HeroSection";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Fi-Portifolio",
    imageUrl: "/logo.png",
    description:
      "Welcome to 'Fi-portfolio' - a showcase of my work! This project highlights my skills and expertise as a frontend developer. Explore a collection of meticulously crafted web pages, beautifully designed user interfaces, and seamlessly interactive features. Dive into the world of 'Fi-portfolio' and witness the blend of creativity, innovation, and technical prowess. Experience the power of modern web development brought to life through this unique project.",
    
   website: "https://github.com/fi-taa/fi-portfolio",
   github: "https://github.com/fi-taa/fi-portfolio",
  },
  {
    id: 2,
    title: "Rating Component",
    imageUrl: "/rate.png",

    description:
      "Discover our simple and intuitive Rating Page! Easily collect user feedback and ratings with a streamlined interface. Effortlessly gather valuable insights to improve your products or services. Start gathering feedback today and make informed decisions.",
    website: "https://github.com/fi-taa/Rating/blob/master/src/components",
    github: "https://github.com/fi-taa/Rating/blob/master/src/components/Rating.jsx",

  },
  {
    id: 3,
    title: "Newsletter Component",
    imageUrl: "/NewsLetter.png",

    description:
      "Introducing our Interactive Newsletter Component! Engage your audience with captivating newsletters that go beyond plain text. Seamlessly integrate interactive elements like videos, images, and interactive buttons to create a truly immersive experience. Boost reader engagement and drive meaningful interactions. Elevate your newsletters to the next level with our user-friendly component.",
    
    website: "https://github.com/fi-taa/Rating/blob/master/src/components/",
    github: "https://github.com/fi-taa/Rating/blob/master/src/components/NewsLetter.jsx",

  },
];

const ProjectPreviewPage = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
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
      <NavBar />
      <Hero />
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <p>Welcome to the Projects page for Frontend Developers! Explore a diverse collection of curated projects to enhance your skills and ignite your passion for frontend development. From responsive layouts to stunning visual effects, find endless possibilities to challenge and inspire you. Happy coding!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md p-6 rounded-md flex flex-col"
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
              <a href="/Detail" className="bg-blue-500 text-white py-2 px-4 rounded-md self-end">
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreviewPage;
