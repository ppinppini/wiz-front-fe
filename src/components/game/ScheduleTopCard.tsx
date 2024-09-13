import { Link } from "react-router-dom";

interface ScheduleTopCardProps{
    isCurrent: boolean;
    gameInfo: {
        homeFullName: string;
        visitFullName: string;
        homeScore?: number;
        visitScore?: number;
        homeLogo: string;
        visitLogo: string;
        homeStarter?: string;
        visitStarter?: string;
        homeDecision?: string;
        visitDecision?: string;
        gameDate: string;
        stadium: string;
        gtime: string;
        gmkey: string;
        displayDate: string;
        outcome?: string;
    };
}
const ScheduleTopCard:React.FC<ScheduleTopCardProps> = ({ 
    isCurrent,
    gameInfo
}) => {
    const {
        homeFullName,
        visitFullName,
        homeScore = 0, 
        visitScore = 0,
        homeLogo,
        visitLogo,
        homeStarter = "미정",
        visitStarter = "미정",
        homeDecision,
        visitDecision,
        gameDate,
        stadium,
        gtime,
        gmkey,
        displayDate,
        outcome
    } = gameInfo;
    
  return (
    <>
        {isCurrent ? (
            <li className="flex float-left w-[36.5%] max-w-[36.5%] h-[226px] box-border">
                <article className="w-full h-full p-[20px] border-[1px] block text-center">
                    {/* Game Date */}
                    <h5 className="mb-[20px] flex justify-center">
                        <div className="w-[120px] h-[28px] rounded-full text-white bg-[#DA3835]">{gameDate}</div>
                    </h5>

                    {/* Game Info */}
                    <div className="w-full h-[118px] flex flex-row">
                        {/* TEAM1 CONTAINER */}
                        <div className="w-1/3 flex flex-col items-center">
                            <img src={visitLogo} alt="visitLogo" className="w-[85px] h-[64px]"/> {/* 이미지 해결되면 w,h 값삭제 */}
                            <div className="notokr w-full h-[48px] text-sm">
                                {visitFullName}
                                {outcome ? (
                                    <div>{visitDecision} : {visitStarter}</div>
                                ) : (
                                    <div>선발 : {visitStarter}</div>
                                )}
                            </div>
                        </div>

                        {/* SCORE, TIME, LOCATION, BUTTON CONTAINER */}
                        <div className="w-1/3 flex flex-col">
                            {/* SCORE */}
                            <div className="text-2xl my-[18px]">
                                {visitScore} : {homeScore}
                            </div>

                            {/* TIME, LOCATION */}
                            {outcome ? (
                                <div>
                                    {outcome}
                                </div>
                            ) : (
                                <div className="text-sm  mb-2">
                                    {gtime} {stadium}
                                </div>
                            )}

                            {/* BUTTON */}
                            <Link to={`../boxscore/${displayDate}/${gmkey}`}>
                                <button className="bg-[#909090] rounded-full text-sm text-white py-1 px-4">
                                    경기 정보
                                </button>
                            </Link>
                        </div>

                        {/* TEAM2 CONTAINER */}
                        <div className="w-1/3 flex flex-col items-center">
                            <img src={homeLogo} alt="homeLogo" className="w-[85px] h-[64px]"/> {/* 이미지 해결되면 w,h 값삭제 */}
                            <div className="notokr w-full h-[48px] text-sm">
                                {homeFullName}
                                {outcome ? (
                                    <div>{homeDecision} : {homeStarter}</div>
                                ) : (
                                    <div>선발 : {homeStarter}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </article>
            </li>
        ) : (
            <li className="flex float-left w-[31.75%] max-w-[31.75%] h-[226px] py-[9px] box-border">
                <article className="w-full h-full p-[20px] border-[1px] block text-center">
                    {/* Game Date */}
                    <h5 className="mb-[20px] flex justify-center">
                        <div className="w-[120px] h-[28px] rounded-full text-white bg-[#343434]">{gameDate}</div>
                    </h5>

                    {/* Game Info */}
                    <div className="w-full h-[118px] flex flex-row">
                        {/* TEAM1 CONTAINER */}
                        <div className="w-1/3 flex flex-col items-center">
                            <img src={visitLogo} alt="visitLogo" className="w-[85px] h-[64px]"/> {/* 이미지 해결되면 w,h 값삭제 */}
                            <div className="notokr w-full h-[48px] text-sm">
                                {visitFullName}
                                {outcome ? (
                                    <div>{visitDecision} : {visitStarter}</div>
                                ) : (
                                    <div>선발 : {visitStarter}</div>
                                )}
                            </div>
                        </div>

                        {/* SCORE, TIME, LOCATION, BUTTON CONTAINER */}
                        <div className="w-1/3 flex flex-col">
                            {/* SCORE */}
                            <div className="text-2xl my-[18px]">
                                {visitScore} : {homeScore}
                            </div>

                            {/* TIME, LOCATION or OUTCOME */}
                            {outcome ? (
                                <div className="text-[#ec0a0b] text-sm mb-2">
                                        {outcome}
                                    </div>
                                ) : (
                                <div className="text-sm mb-2">
                                    {gtime} {stadium}
                                </div>
                            )}

                            {/* BUTTON */}
                            <Link to={`../boxscore/${displayDate}/${gmkey}`}>
                                <button className="bg-[#909090] rounded-full text-sm text-white py-1 px-4">
                                    경기 정보
                                </button>
                            </Link>
                        </div>

                        {/* TEAM2 CONTAINER */}
                        <div className="w-1/3 flex flex-col items-center">
                            <img src={homeLogo} alt="homeLogo" className="w-[85px] h-[64px]"/> {/* 이미지 해결되면 w,h 값삭제 */}
                            <div className="notokr w-full h-[48px] text-sm">
                                {homeFullName}
                                {outcome ? (
                                    <div>{homeDecision} : {homeStarter}</div>
                                ) : (
                                    <div>선발 : {homeStarter}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </article>
            </li>
        )}
        
    </>
  );
}
export default ScheduleTopCard