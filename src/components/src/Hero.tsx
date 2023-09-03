import {
  BubbleButton,
  GradientText,
  ProgrammerHero,
  SectionWrapper,
  SpringMotionDiv,
} from "..";

const Hero = () => {
  return (
    <SectionWrapper idName="Hero" hasSpan={false}>
      <div className="mb-[40px]">&nbsp;</div>
      <div className="h-screen relative">
        <div className="absolute top-20 sm:top-10 md:top-20">
          <SpringMotionDiv direction={"up"} delay={1.8} whileInView={false}>
            <p className="text-[40px] leading-[40px] sm:text-[60px] font-black mb-6">
              Hi, I am <GradientText text="Golden Fam" />
            </p>
          </SpringMotionDiv>
          <SpringMotionDiv direction={"up"} delay={2} whileInView={false}>
            <p className="text-[20px] leading-[40px] sm:text-[40px] mb-10">
              I'm a software engineer. I build things that live on the internet.
            </p>
          </SpringMotionDiv>

          <SpringMotionDiv direction={"up"} delay={2.3} whileInView={false}>
            <BubbleButton
              onClick={() =>
                window.open(
                  "/Golden_Fam_Resume.pdf",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            />
          </SpringMotionDiv>
        </div>

        <div className="absolute bottom-20 right-0 md:-right-5 lg:-right-10">
          <SpringMotionDiv direction={"up"} delay={2.5} whileInView={false}>
            <ProgrammerHero />
          </SpringMotionDiv>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
