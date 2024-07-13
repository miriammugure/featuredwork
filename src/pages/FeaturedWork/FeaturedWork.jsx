import React from "react";
import "./FeaturedWork.css";
import FeaturedData from "../data/FeaturedData";
import Map from "./map.jsx";

function FeaturedWork() {
  return (
    <div>
      <div className="FeaturedContainer">
        <div className="FeaturedTitle">
          <p>featured works</p>
        </div>
        <div className="ActualContainer">
          {FeaturedData.map((item, index) => (
            <Map
              key={index}
              image={item.image}
              descriptiontitle={item.descriptiontitle}
              year={item.year}
              subtitle={item.subtitle}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedWork;
