interface ProjectCardProps {
  header: string;
  cardClass: string;
  paragraph?: string;
  paragraph2?: string;
  paragraphResponsive?: string;
  image?: string;
  alt?: string;
  list?: boolean;
  listItems?: string[];
}

const ProjectCard = ({
  header,
  cardClass,
  paragraph,
  paragraph2,
  paragraphResponsive,
  image,
  alt,
  list,
  listItems,
}: ProjectCardProps) => {
  return (
    <div
      className={
        cardClass +
        " flex flex-col bg-black rounded-xl border p-6 h-72 md:h-[22rem] xxl:h-[34.5rem] absolute w-full"
      }
    >
      <h2 className="font-inter font-medium text-4xl xl:text-5xl pb-4">
        {header}
      </h2>
      {paragraph ? (
        <p className="font-inconsolata xl:text-xl">{paragraph}</p>
      ) : null}
      {paragraphResponsive ? (
        <p className="hidden lg:block font-inconsolata xl:text-xl pt-2">
          {paragraphResponsive}
        </p>
      ) : null}
      {paragraph2 ? (
        <p className="font-inconsolata xl:text-xl pt-2">{paragraph2}</p>
      ) : null}
      {image ? (
          <div className="object-scale-down w-10/12 overflow-hidden rounded-2xl border-white/20 border">
            <img src={image} alt={alt} />
          </div>
      ) : null}
      {list ? (
        <ul role="list" className="list-disc list-inside">
          {listItems?.map((item) => (
            <li className="font-inconsolata xl:text-xl" key={item}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ProjectCard;
