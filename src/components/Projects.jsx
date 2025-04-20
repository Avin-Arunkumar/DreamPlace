import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden "
        id="Projects"
      >
        <h1 className="text-2xl font-bold mb-3">
          Projects <span className="font-light underline">Completed</span>
        </h1>
        <p className="text-gray-500  max-w-80 text-center mb-8">
          Crafting Spaces, Building Legacies—Explore Our Portfolio
        </p>
        {/* slider Button */}
        <div className="flex justify-end items-center mb-8 w-full">
          <button
            onClick={prevProject}
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Previous Project"
          >
            <img src={assets.left_arrow} alt="left-arrow" />
          </button>
          <button
            onClick={nextProject}
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Next Project"
          >
            <img src={assets.right_arrow} alt="right-arrow" />
          </button>
        </div>
        {/* Project slider container */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full sm:w-1/4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mb-14"
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center ">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} <span> </span> {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
