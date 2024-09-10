import { useQuery } from "@tanstack/react-query";
import { highlightsVideoFetcher } from "../../api/api";
import { Link } from "react-router-dom";
import React from "react";
import { nanoid } from "nanoid";
import { TMainHighlightsVideoListType } from "../../types/types";
// 하이라이트 비디오를 보여주는 컴포넌트 
const MainHighlightsVideo = () => {
    const {isLoading, isError, data,  error} = useQuery({ queryKey: ["hilgihtsVideo"], queryFn: highlightsVideoFetcher });

    // 컴포넌트 로딩 중 ...
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    
    // api 요청 에러시 에러 메세시 나오는 것 
    if (isError) return <h1>{error.message}</h1>;

    
    // 하이라이트 비디오 리스트를 보여주는 컴포넌트
    const MainHighlightsVideoList = () => {
        return (
            <div className="flex flex-col items-center mt-40">
                <ul className="flex w-[68.75%] justify-between p-0 m-0">
                    {data.data.list.slice(1, 5).map((video: TMainHighlightsVideoListType) => (
                        <li key={nanoid()} className="flex flex-col  w-[20%]">
                            <Link to={"/"}>
                                <img src={video.imgFilePath} alt="썸네일 이미지" className="w-full h-auto block rounded-md" />
                                <div className="flex justify-between w-full mt-2">
                                    <div className="inline-block mb-4 rounded-[12px] bg-gradient-to-r from-[#f53232] via-[#cc65de] to-[#2ab2c6] px-2 py-1 text-[11px] text-white font-bold">
                                        하이라이트
                                    </div>
                                    <span className="block">
                                        {new Date(video.contentsDate).toLocaleDateString("ko-KR", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                                <h2 className="text-center">{video.artcTitle}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-4 border rounded-md border-black  px-4 py-2 cursor-pointer text-center w-80">더 많은 영상 보기</div>
            </div>
        );
    };
    return (
        <>
            <div className="flex flex-col justify-between items-center min-h-[500px] relative z-10">
                <img className="block absolute top-0" src="https://www.ktwiz.co.kr/v2/imgs/img-title-video@2x.png" alt="wizVideo이미지" />
                <div className="relative w-[68.75%] pb-[39%]">
                    <iframe
                        src={`https://tv.naver.com/embed/${data.data.list[0].refSeq}?autoPlay=false`}
                        title={data.data.list[0].artTitle}
                        allow="autoplay"
                        allowFullScreen
                        className="absolute top-32 left-0 w-full h-full rounded-3xl z-20"
                    ></iframe>
                </div>
            </div>
            <MainHighlightsVideoList />
        </>
    );
};
export default React.memo(MainHighlightsVideo);
