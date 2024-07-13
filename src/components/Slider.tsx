import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Slider.css';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Toothfixers",
    description: "A web-based application for managing patients' clinical records for ToothFixers Ltd., a large dental company with multiple dentists.",
    imageUrl: "/assets/toothfixers.png",
    link: "https://github.com/QoyyumO/toothfixers-project"
  },
  {
    title: "NFT preview card",
    description: "A web design template of a preview card for nft using HTML and CSS.",
    imageUrl: "/assets/nft-review-card.jpg",
    link: "https://nft-preview-card-qoyyumo.vercel.app"
  },
  {
    title: "CBT project",
    description: "A C++ project on Computer based testing",
    imageUrl: "/assets/CBT.jpg",
    link: "https://github.com/QoyyumO/CBT"
  },
  {
    title: "Result Summary",
    description: "Another web design template to show the review or summary of a test done.",
    imageUrl: "/assets/result-summary.png",
    link: "https://result-summary-QoyyumO.vercel.app"
  },
  {
    title: "Yummy",
    description: "A web design on a restaurant that offers healthy food",
    imageUrl: "/assets/yummy.png",
    link: "https://yummy-QoyyumO.vercel.app"
  },
  {
    title: "UpConstruction",
    description: "A web design on a construction firm.",
    imageUrl: "/assets/upcons.png",
    link: "https://up-construction-qoyyumo.vercel.app"
  },
  {
    title: "Shapely",
    description: "A web design on a firm that deals with web development",
    imageUrl: "/assets/shapely.png",
    link: "https://shapely-qoyyumo.vercel.app"
  },
  {
    title: "Vue-multi-projects",
    description: "A multi-project, counter, notes and quiz app, made with vue js, a javascript framework.",
    imageUrl: "/assets/vue-projects.png",
    link: "https://vue-projects-nu.vercel.app"
  },
  {
    title: "Consultae",
    description: "A web design on a consulting firm.",
    imageUrl: "/assets/consultae.png",
    link: "https://consultae-qoyyumo.vercel.app"
  },
  {
    title: "Guessing Game",
    description: "A guessing game produced using javascript threaded with real time.",
    imageUrl: "/assets/guess.png",
    link: "https://guess-qoyyumo.vercel.app"
  },
  {
    title: "Tic-Tac-toe Game",
    description: "A tic-tac-toe game produced using html, css and javascript.",
    imageUrl: "/assets/tic.png",
    link: "https://tic-tac-toe-qoyyumo.vercel.app"
  }
];

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(projects.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change the slide every 5 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setPrevIndex(activeIndex);
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setPrevIndex(activeIndex);
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div
      className={`slider-container`}
      style={{
        backgroundImage: `url(${projects[activeIndex].imageUrl})`,
      }}
    >
      <div className="content">
        <h2 className="title">{projects[activeIndex].title}</h2>
        <p className="description">{projects[activeIndex].description}</p>
        <button className="see-more">
          <a href={projects[activeIndex].link}>See More -&gt;</a>
        </button>
      </div>
      <div className="preview-container">
        {[1, 2, 3].map((offset) => (
          <div
            key={offset}
            className="preview"
            style={{
              backgroundImage: `url(${projects[(activeIndex + offset) % projects.length].imageUrl})`,
            }}
          ></div>
        ))}
      </div>
      <nav className="nav">
        <button className="btn prev" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="btn next" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </nav>
    </div>
  );
};

export default Slider;