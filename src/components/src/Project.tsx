import { Tilt } from "react-tilt";
import { github } from "../../assets";
import { projects } from "../../utils/constants";
import SectionWrapper from "./SectionWrapper";
import SpringMotionDiv from "./SpringMotionDiv";
import SectionHeadText from "./SectionHeadText";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  webpage_link,
}: {
  index: number;
  name: string;
  description: string;
  tags: any[];
  image: string;
  source_code_link: string;
  webpage_link: string;
}) => {
  return (
    <SpringMotionDiv direction={"right"} delay={0.5 * index} duration={2}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {webpage_link !== null && (
              <div
                onClick={() => window.open(webpage_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-1/2 h-1/2 object-contain"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
            )}

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`tag-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </SpringMotionDiv>
  );
};

const Project = () => {
  return (
    <SectionWrapper idName={"Project"}>
      <SpringMotionDiv direction={"up"} delay={0.3} duration={0.75}>
        <SectionHeadText text="Project"></SectionHeadText>

        <p className="text-center text-gray-300">Some things I've built</p>
      </SpringMotionDiv>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-card-${index}`}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            source_code_link={project.source_code_link}
            webpage_link={project.webpage_link}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Project;
