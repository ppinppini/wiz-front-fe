import React from "react";
import ribonImage from "../../assets/ribon.png";

interface RibonProps {
  innerText: string;
}

const Ribon: React.FC<RibonProps> = ({ innerText }) => {
  return (
    <>
      <div
        className="absolute flex flex-col w-[76px] h-[97px] items-center pt-[15px] left-[-10px] top-[-10px]"
        style={{ backgroundImage: `url(${ribonImage})` }}
      >
        <span className="text-[13px]">{innerText}</span>
        <span className="text-[16px]">TOP3</span>
      </div>
    </>
  );
};
export default Ribon;
