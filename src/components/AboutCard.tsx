import React from "react";
import About from "../pages/About";

interface AboutProps {
  header: string;
  paragraph?: string;
  list?: boolean;
  listItems?: string[];
  tagOne: string;
  tagTwo: string;
  iconImg: string;
  imgAlt: string;
  id: string;
}

const AboutCard = ({
  header,
  paragraph,
  list,
  listItems,
  tagOne,
  tagTwo,
  iconImg,
  imgAlt,
  id,
}: AboutProps) => {
  return (
    <div
      id={id}
      className="flex flex-col p-4 justify-between glass-bg about-card w-full md:w-72 min-h-52 md:h-72 opacity-1 rounded-xl"
    >
      <div className="about-content space-y-2.5">
        <h2 className="font-inconsolata text-xl xxl:text-2xl font-bold">
          {header}
        </h2>
        {paragraph ? <p className="font-inconsolata xxl:text-xl">{paragraph}</p> : null}
        {list ? (
        <ul role="list" className="list-disc list-inside  ">
          {listItems?.map((item) => (
            <li className="font-inconsolata xl:text-xl" key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      </div>
      <div className="about-tags flex space-x-2 pt-4">
        <div className="border rounded-3xl md:text-sm xxl:text-xl self-center px-2">
          <p>{tagOne}</p>
        </div>
        <div className="border rounded-3xl md:text-sm xxl:text-xl self-center px-2">
          <p>{tagTwo}</p>
        </div>
        <img src={iconImg} alt={imgAlt} />
      </div>
    </div>
  );
};

export default AboutCard;
