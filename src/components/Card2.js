import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';

const Card2 = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  if (!projects || projects.length === 0) {
    // Handle the case where no projects are available
    return null;
  }

  const activeProject = projects[activeIndex];

  return (
    <div className="flex justify-center items-center">
      <Card className="max-w-lg">
        <Card.Body>
          <Card.Title className="text-2xl font-bold mb-4">
            {activeProject.title}
          </Card.Title>
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            className="w-full"
          />
        </Card.Body>
        <Card.Footer>
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next Project
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Card2;
