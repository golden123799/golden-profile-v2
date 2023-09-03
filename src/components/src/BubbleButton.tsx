import { Tilt } from "react-tilt";
import GradientText from "./GradientText";
import { ArrowUp } from "../../assets";

const BubbleButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Tilt className="flex justify-center items-center h-[140px] w-[140px] rounded-full cursor-pointer bg-gradient-to-r from-blue-500 to-white p-[2px]">
      <div
        className="flex justify-center items-center flex-col bg-primary w-full h-full rounded-full"
        onClick={() => onClick()}
      >
        <div className="flex justify-center items-start flex-row">
          <GradientText text="Get" />
          <img
            src={ArrowUp}
            alt="arrow"
            className="w-[25px] h-[25px] object-contain ml-2"
          />
        </div>
        <GradientText text="Resume" />
      </div>
    </Tilt>
  );
};

export default BubbleButton;
