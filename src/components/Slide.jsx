import { useState } from "react";
import projects from "@/data/projects";

const Slide = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % projects.length);
  };

  const handlePrevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? projects.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="relative w-3/4">
      <div className="relative w-full  h-64 sm:h-80 md:h-96 lg:h-120 xl:h-144">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {isHovered && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <h3 className="text-white  text-sm m-2">{project.description}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between py-2 px-4 bg-black bg-opacity-50 text-white">
        <button
          className="text-white hover:text-gray-300"
          onClick={handlePrevSlide}
        >
          Previous
        </button>
        <h3 className="text-white font-bold text-lg">
          {projects[currentImage].title}
        </h3>
        <button
          className="text-white hover:text-gray-300"
          onClick={handleNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slide;
