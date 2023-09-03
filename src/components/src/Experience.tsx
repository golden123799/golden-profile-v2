import { SpringMotionDiv, SectionHeadText, SectionWrapper } from "..";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../utils/constants";

interface ExperienceProps {
  date: string;
  iconBg: string;
  title: string;
  company_name: string;
  points: string[];
}

const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-gray-300 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <SectionWrapper idName={"Experience"}>
      <SpringMotionDiv direction={"up"} delay={0.3} duration={0.75}>
        <SectionHeadText text="Experience" />
        <p className="text-center text-gray-300">Where I've worked</p>
      </SpringMotionDiv>

      {/* Where I've worked - Included details (Company Name / Date / Description) */}
      <VerticalTimeline>
        {experiences.map((item, index) => (
          <ExperienceCard
            key={`ExperienceCard-${item.title}-${index}`}
            experience={item}
          ></ExperienceCard>
        ))}
      </VerticalTimeline>
    </SectionWrapper>
  );
};

export default Experience;
