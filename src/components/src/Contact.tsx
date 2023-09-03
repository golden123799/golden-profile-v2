import {
  HeyEmail,
  SectionHeadText,
  SectionWrapper,
  SocialMediaButton,
  SpringMotionDiv,
} from "..";

const Contact = () => {
  return (
    <SectionWrapper idName="Contact">
      <div className="flex flex-col md:flex-row flex-col-reverse justify-center gap-10 xl:gap-20 items-center text-center overflow:hidden mb-[100px]">
        <SpringMotionDiv direction={"right"} delay={0.3} duration={0.75}>
          <div className="mt-12 flex flex-col bg-black-100 p-8 rounded-2xl">
            <SectionHeadText text="Contact"></SectionHeadText>
            <p className="sm:text-[18px] text-[14px] text-gray-300 tracking-wider mb-5">
              If you're interested in working together, have a suggestion for a
              project, or just want to say hello, please don't hesitate to
              contact me.
              <br /> <br />I am always looking to connect with like-minded
              individuals and explore new opportunities. Let's start a
              conversation and see where it takes us!
            </p>
            <SocialMediaButton />
          </div>
        </SpringMotionDiv>
        <SpringMotionDiv direction={"left"} delay={0.3} duration={0.75}>
          <HeyEmail />
        </SpringMotionDiv>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
