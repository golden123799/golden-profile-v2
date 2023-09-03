import { SectionHeadText, SectionWrapper, SpringMotionDiv } from "..";
import { profilePicture } from "../../assets";
import { Tilt } from "react-tilt";
import { services, technologies } from "../../utils/constants";

const ServiceCard = ({ title, index }: { title: string; index: number }) => {
  return (
    <Tilt className="xs:w-[250px] w-[300px]">
      <SpringMotionDiv direction={"right"} delay={0.5 * index} duration={0.75}>
        <div className="w-full bg-gradient-to-r from-blue-500 to-white p-[1px] rounded-[20px] shadow-card">
          <div className="bg-primary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col">
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </div>
      </SpringMotionDiv>
    </Tilt>
  );
};

const TechnologyCard = ({
  name,
  icon,
  index,
}: {
  name: string;
  icon: string;
  index: number;
}) => {
  return (
    <SpringMotionDiv direction={"right"} delay={0.2 * index} duration={0.35}>
      <div className="group h-[100px] w-[100px] [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={icon}
              alt={`Technology-Icon-${name}`}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              {name}
            </div>
          </div>
        </div>
      </div>
    </SpringMotionDiv>
  );
};

const About = () => {
  return (
    <SectionWrapper idName="About">
      <SpringMotionDiv direction={"up"} delay={0.3} duration={0.75}>
        <SectionHeadText text="About"></SectionHeadText>
      </SpringMotionDiv>

      {/* Profile picture with description */}
      <div className="flex flex-col md:flex-row md:gap-20 gap-10 items-center">
        <SpringMotionDiv direction={"left"} delay={0.3} duration={0.75}>
          <div>
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="min-w-[20px] max-w-[3000px] h-[150px] md:h-[300px]"
            />
          </div>
        </SpringMotionDiv>
        <SpringMotionDiv direction={"right"} delay={0.3} duration={0.75}>
          <div className="text-gray-300 text-center md:text-left">
            Hi! My name is Golden Fam Fook Cheng. I am passionate about building
            efficient and effective solutions to complex problems. With
            experience in a range of programming languages and development
            tools, I am always looking to expand my skill set and stay
            up-to-date with the latest industry trends.
            <br /> <br />
            My approach to development involves a focus on clean, maintainable
            code and a commitment to delivering high-quality products that meet
            the needs of users. Whether working independently or as part of a
            team, I am dedicated to creating innovative solutions that make a
            difference in people's lives.
          </div>
        </SpringMotionDiv>
      </div>

      {/* Card with tilt functions - to display Services */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((item, index) => (
          <ServiceCard
            index={index}
            title={item}
            key={`ServiceCard-${item}-${index}`}
          ></ServiceCard>
        ))}
      </div>

      <div className="my-20"></div>

      <p className="text-center text-gray-300 mb-10">
        Here are the tools and technologies I am familiar with:
      </p>
      <div className="flex flex-wrap gap-10 justify-center">
        {technologies.map((item, index) => (
          <TechnologyCard
            key={`TechnologyCard-${item.name}-${index}`}
            name={item.name}
            icon={item.icon}
            index={index}
          ></TechnologyCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
