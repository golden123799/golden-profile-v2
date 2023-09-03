interface GradientTextProps {
  text?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text = "Text" }) => {
  return (
    <span className="bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
      {text}
    </span>
  );
};

export default GradientText;
