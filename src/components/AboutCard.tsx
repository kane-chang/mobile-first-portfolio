import React from "react";
import About from "../pages/About";

interface AboutProps {
  header: string;
  paragraph: string;
  tagOne: string;
  tagTwo: string;
  iconImg: string;
  imgAlt: string;
}

const AboutCard = ({
  header,
  paragraph,
  tagOne,
  tagTwo,
  iconImg,
  imgAlt,
}: AboutProps) => {
  return (
    <div className="flex flex-col space-y-36 p-4 glass-bg">
      <div className="about-content space-y-2.5">
        <h2 className="font-inconsolata text-xl font-bold">{header}</h2>
        <p className="font-inconsolata">{paragraph}</p>
      </div>
      <div className="about-tags flex space-x-2">
        <div className="border rounded-3xl px-2">
          <p>{tagOne}</p>
        </div>
        <div className="border rounded-3xl px-2">
          <p>{tagTwo}</p>
        </div>
        <img src={iconImg} alt={imgAlt} />
      </div>
    </div>
  );
};

export default AboutCard;
