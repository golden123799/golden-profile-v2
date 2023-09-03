interface SectionHeadTextProps {
  text: string;
}

const SectionHeadText: React.FC<SectionHeadTextProps> = ({ text }) => {
  return (
    <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-5 md:mb-10">
      {text}
    </h2>
  );
};

export default SectionHeadText;
