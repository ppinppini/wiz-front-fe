import classNames from "classnames";
import { THistoryDataType } from "../types/types";

type HistoryCardProps = {
    historyData: THistoryDataType[];
};
//KT Wiz란? 페이지의 구단 연혁 카드를 보여주는 컴포넌트
const HistoryCard = ({ historyData }: HistoryCardProps) => {
    return (
        <div className="px-40 relative">
            {historyData.map((item) => (
                <div key={item.id} className={classNames("w-[100%] -z-10  mb-4 flex  relative", item.id % 2 === 0 ? " justify-start" : " justify-end")}>
                    <div className="w-[26.8em] relative ">
                        <div className="text-[20px] pl-8">{item.title}</div>
                        <div className="w-[26.8em] h-1 border-b-2 border-red-600"></div>
                        <div className="bg-[#f8f8f8] px-[28px] py-[38px]">
                            {item.text.split(",").map((text, index) => {
                                const parts = text.split("-"); // '-' 기준으로 문자열 분리
                                return (
                                    <div key={index} className="text-[#5b5a5a]">
                                        <p className="font-bold">{parts[0]}</p>
                                        {parts.length > 1 && <p>-{parts[1]}</p>} {/* '-'가 있으면 추가 <p> 생성 */}
                                    </div>
                                );
                            })}
                        </div>

                        <div
                            className={classNames(
                                "absolute top-[50px]  w-[10px] h-[10px] bg-[#f9f9f9]   border-[#e4e4e4] rotate-45",
                                item.id % 2 === 0 ? "left-[424px] border-r border-t" : "right-[424px] border-l border-b"
                            )}
                        ></div>

                        <img className="block w-[45px] h-[45px]  absolute top-1 -left-4" src="https://www.ktwiz.co.kr/static/media/team_history_title_icon.794f1b13.png" alt="야구공" />
                    </div>
                    <div className="absolute  top-[50px] left-1/2 w-[12px] h-[12px] bg-[#ec0a0b] object-contain -ml-[4px] z-10"></div>
                    <div className="absolute  top-[1em] left-1/2  h-full w-[3px] bg-[#e3e3e3]"></div>
                </div>
            ))}
        </div>
    );
};

export default HistoryCard;
