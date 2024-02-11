import React from "react";

interface ProjectCardProps {
  header: string;
  paragraph?: string;
  image?: string;
  alt?: string;
  list?: boolean;
  listItems?: string[];
}

const ProjectCard = ({
  header,
  paragraph,
  image,
  alt,
  list,
  listItems,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col bg-black rounded-xl border p-6 h-72 absolute w-full project-card">
      <h2 className="font-inter font-medium text-4xl pb-4">{header}</h2>
      {paragraph ? <p className="font-inconsolata">{paragraph}</p> : null}
      {image ? <img className="w-full" src={image} alt={alt} /> : null}
      {list ? (
        <ul role="list" className="list-disc list-inside">
          {listItems?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ProjectCard;
