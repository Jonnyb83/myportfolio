import React from 'react';
import data from '../data/datalist';
import Card from '../components/card';
import "./Projects.css";

const Projects = () => {
  return (
    <div className="card-container">
      {data.map(item => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          imgsrc={item.imgsrc}
          title={item.title}
          aboutone={item.aboutone}
          abouttwo={item.abouttwo}
          aboutthree={item.aboutthree}
          button={item.button}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default Projects;