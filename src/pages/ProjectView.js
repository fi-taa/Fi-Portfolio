import Link from "next/link";
import { useState, useEffect } from "react";

// Dummy project data
const projects = [
    {id:0,
    title: "Projects  🔻",
    description:"Welcome to the Projects page for Frontend Developers! Explore a diverse collection of curated projects to enhance your skills and ignite your passion for frontend development. From responsive layouts to stunning visual effects, find endless possibilities to challenge and inspire you. Happy coding!",
website:"https://fitaa.vercel.app",
github:"https://github.com/fi-taa"},
  {
    id: 1,
    title: "Fi-Portifolio",
    description:
      "Welcome to 'Fi-portfolio' - a showcase of my work! This project highlights my skills and expertise as a frontend developer. Explore a collection of meticulously crafted web pages, beautifully designed user interfaces, and seamlessly interactive features. Dive into the world of 'Fi-portfolio' and witness the blend of creativity, innovation, and technical prowess. Experience the power of modern web development brought to life through this unique project.",
    
   website: "https://github.com/fi-taa/fi-portfolio",
   github: "https://github.com/fi-taa/fi-portfolio",
  },
  {
    id: 2,
    title: "Rating Component",
    description:
      "Discover our simple and intuitive Rating Page! Easily collect user feedback and ratings with a streamlined interface. Effortlessly gather valuable insights to improve your products or services. Start gathering feedback today and make informed decisions.",
    website: "https://github.com/fi-taa/Rating/blob/master/src/components",
    github: "https://github.com/fi-taa/Rating/blob/master/src/components/Rating.jsx",

  },
  {
    id: 3,
    title: "Newsletter Component",
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
      if (currentIndex >= selectedProject.description.length-1) {
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
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <header className="flex items-center justify-between w-full px-4 py-3">
        <Link href="/">
            <img src="/h2.jpg" width={50} height={50} className="rounded drop-shadow-md hover:scale-125"/>
        </Link>
        <div className="flex items-center space-x-2">
          <a
            href="mailto:your-email@gmail.com"
            className="text-gray-600 hover:text-blue-500"
          >
            Gmail
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            GitHub
          </a>
        </div>
      </header>
      <main className="flex items-center justify-center flex-grow p-4">
        <div className="flex items-start space-x-8">
        <ul className="space-y-4 border-2 p-5 rounded border-black/50 text-black ">
            {projects.map((project) => (
              <li
                key={project.id}
                className={`p-2 rounded-md ${
                  selectedProject.id === project.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                } cursor-pointer`}
                onClick={() => handleProjectClick(project)}
              >
                {project.title}
              </li>
            ))}
          </ul>
          <div className="flex flex-col flex-grow">
            <h2 className="text-2xl font-bold ">
              {selectedProject.title}
            </h2>
            <div
              className="flex-grow p-4 mt-4 max-h-96 overflow-y-auto bg-black text-white rounded-md shadow-md"
              style={{ width: "100%", maxWidth: "400px" }}

            >
              {renderedDescription.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex justify-center mt-4 space-x-2 text-sm sm:text-md">
              <a
                href={selectedProject.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                View Site
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPreviewPage;
