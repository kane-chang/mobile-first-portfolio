import React from "react";
import About from "../pages/About";

interface AboutProps {
  header: string;
  paragraph: string;
  tagOne: string;
  tagTwo: string;
  iconImg: string;
  imgAlt: string;
  id: string;
}

const AboutCard = ({
  header,
  paragraph,
  tagOne,
  tagTwo,
  iconImg,
  imgAlt,
  id,
}: AboutProps) => {
  return (
    <div id={id} className="flex flex-col space-y-6 md:space-y-36 p-4 glass-bg about-card min-w-72 opacity-1">
      <div className="about-content space-y-2.5">
        <h2 className="font-inconsolata text-xl xxl:text-2xl font-bold">{header}</h2>
        <p className="font-inconsolata xxl:text-xl">{paragraph}</p>
      </div>
      <div className="about-tags flex space-x-2">
        <div className="border rounded-3xl xxl:text-xl px-2">
          <p>{tagOne}</p>
        </div>
        <div className="border rounded-3xl xxl:text-xl px-2">
          <p>{tagTwo}</p>
        </div>
        <img src={iconImg} alt={imgAlt} />
      </div>
    </div>
  );
};

export default AboutCard;
