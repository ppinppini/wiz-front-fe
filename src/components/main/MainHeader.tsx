import { useQuery } from "@tanstack/react-query";

import { api } from "../../api/api";

import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const MainHeader = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["recentNews"],
    queryFn: api.recentNewsFetcher,
  });

  if (isError) return <h1>{isError}</h1>;
  if (isLoading) return <h1>{isLoading}</h1>;
  return (
    <div
      className={`bg-[url('https://www.ktwiz.co.kr/v2/imgs/dummy/main/2024_season_bg_web.png')]  px-40  relative bg-center  text-[white]  bg-no-repeat w-full h-[1000px] box-border`}
    >
      <div className="relative flex items-center justify-between h-full">
        <FaAngleLeft className="absolute transform -translate-y-1/2 cursor-pointer top-1/2 left-4 text-9xl" />
        <FaAngleRight className="absolute transform -translate-y-1/2 cursor-pointer top-1/2 right-4 text-9xl" />
      </div>
      <div className="absolute bottom-0 block w-[33.3333%] p-[10px] pb-10 ">
        <div className=" inline-block mb-4 rounded-[12px] bg-gradient-to-r from-[#f53232] via-[#cc65de] to-[#2ab2c6] px-2 py-1 text-[11px] text-white font-bold">
          위즈 소식
        </div>
        <h1 className="text-[21px] mb-3 leading-4">{data[0].artcTitle}</h1>
        <p className="text-[13px] opacity-50 truncate leading-6 max-h-12">
          {data[0].artcContents}
        </p>
        <div>
          <Link to={"/"}>자세히 보기 &rarr;</Link>
        </div>
      </div>
    </div>
  );

};
export default MainHeader;
