import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ScheduleCalendar = () => {
    const today = new Date();
    const initialYearMonth = today.toLocaleDateString("en-CA").slice(0, 7).replace("-", "");
    const [newYearMonth, setNewYearMonth] = useState<string>(initialYearMonth);

    const {
        data: monthData,
        isError: isMonthError,
        error: monthError,
        isLoading: isMonthLoading,
    } = useQuery({
        queryKey: ["monthschedule", newYearMonth],
        queryFn: () => api.monthSceduleFetcher(newYearMonth),
    });

    const { data: allGamesData, isLoading: isAllGamesLoading } = useQuery({
        queryKey: ["allgameschedule", newYearMonth],
        queryFn: () => api.allGameScheduleFetcher(newYearMonth),
    });

    const [value, setValue] = useState<Date | [Date, Date] | null>(new Date());

    const [activeTab, setActiveTab] = useState<"wiz" | "all">("wiz");
    const navigate = useNavigate();

    if (isMonthLoading || isAllGamesLoading) {
        // 로딩 상태일 때 스켈레톤을 보여줍니다.
        return (
            <div className="p-4 w-full max-w-4xl mx-auto bg-gray-500 text-gray-600 rounded-lg">
                <div className="flex gap-2  ">
                    {/* 기본 Skeleton 컴포넌트 */}
                    <Skeleton
                        width={83}
                        height={50}
                        baseColor="gray" // 기본 배경색 설정
                        highlightColor="lightgray" // 하이라이트 색상 설정
                        style={{
                            marginBottom: "1rem",
                            padding: "16px",
                            backgroundColor: "gray !important", // 우선순위 높이기
                        }}
                    />
                    <Skeleton
                        width={83}
                        height={50}
                        baseColor="gray" // 기본 배경색 설정
                        highlightColor="lightgray" // 하이라이트 색상 설정
                        style={{
                            marginBottom: "1rem",
                            padding: "16px",
                            backgroundColor: "gray !important", // 우선순위 높이기
                        }}
                    />
                </div>

                {/* 캘린더 스켈레톤 */}
                <Skeleton height={848} baseColor="gray" highlightColor="lightgray" style={{ backgroundColor: "gray !important" }} />
            </div>
        );
    }

    if (isMonthError) return <h1>{monthError.message}</h1>;

    // 월간 일정 데이터 처리
    const gameData = monthData?.data?.list.reduce(
        (acc: any, game: any) => {
            const formattedDate = `${game.displayDate.slice(0, 4)}-${game.displayDate.slice(4, 6)}-${game.displayDate.slice(6, 8)}`;
            acc[formattedDate] = game;
            return acc;
        },
        {} as { [key: string]: (typeof monthData.data.list)[0] }
    );

    // 전체 경기 일정 데이터 처리
    const allGameDataMap = allGamesData?.data?.list.reduce((acc: any, game: any) => {
        const formattedDate = `${game.displayDate.slice(0, 4)}-${game.displayDate.slice(4, 6)}-${game.displayDate.slice(6, 8)}`;
        acc[formattedDate] = acc[formattedDate] || [];
        acc[formattedDate].push(game);
        return acc;
    }, {});

    // onChange 핸들러
    const handleChange: CalendarProps["onChange"] = (newValue) => {
        if (newValue instanceof Date) {
            setValue(newValue);

            const selectedDate = newValue.toLocaleDateString("en-CA");
            const selectedGameData = gameData[selectedDate];

            if (selectedGameData) {
                navigate(`/game/boxscore?gameDate=${selectedGameData.displayDate}&gmkey=${selectedGameData.gmkey}`, {
                    state: {
                        gmkey: selectedGameData.gmkey,
                        displayDate: selectedGameData.displayDate,
                    },
                });
            }
        }
    };

    const handleMonthChange = ({ activeStartDate }: { activeStartDate: Date | null }) => {
        if (activeStartDate) {
            const formattedYearMonth = activeStartDate.toLocaleDateString("en-CA").slice(0, 7).replace("-", "");
            setNewYearMonth(formattedYearMonth);
        }
    };

    return (
        <div className="p-4 w-full max-w-4xl mx-auto bg-black text-white rounded-lg">
            <div className="w-[30%] flex gap-1 p-2">
                <span
                    className={`block p-4 rounded-md cursor-pointer 
                ${activeTab === "wiz" ? "bg-red-600 text-white" : "hover:bg-red-600 hover:text-white"}`}
                    onClick={() => setActiveTab("wiz")}
                >
                    KT Wiz 경기
                </span>
                <span
                    className={`block p-4 rounded-md cursor-pointer 
                ${activeTab === "all" ? "bg-red-600 text-white" : "hover:bg-red-600 hover:text-white"}`}
                    onClick={() => setActiveTab("all")}
                >
                    전체 경기
                </span>
            </div>

            {activeTab === "wiz" && (
                <Calendar
                    onChange={handleChange}
                    value={value}
                    onActiveStartDateChange={handleMonthChange}
                    tileClassName={({ date, view }) => {
                        if (view === "month" && date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
                            return "border-2 border-red-500";
                        }
                        return "";
                    }}
                    tileContent={({ date, view }) => {
                        const dateString = date.toLocaleDateString("en-CA");
                        const game = gameData[dateString];

                        if (view === "month" && game) {
                            return (
                                <div className="text-center ">
                                    {game.home === "KT" ? <img src={game.visitLogo} alt="원정 로고 이미지" /> : <img src={game.homeLogo} alt="홈 로고" />}
                                    <p>{`${game.home} vs ${game.visit}`}</p>
                                    <p>{game.gtime}</p>
                                </div>
                            );
                        }
                        return null;
                    }}
                />
            )}

            {activeTab === "all" && (
                <Calendar
                    value={value}
                    tileClassName={({ date, view }) => {
                        if (view === "month" && date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
                            return "border-2 border-red-500";
                        }
                        return "";
                    }}
                    tileContent={({ date, view }) => {
                        const dateString = date.toLocaleDateString("en-CA");
                        const games = allGameDataMap[dateString];

                        if (view === "month" && games) {
                            return (
                                <div className="text-center ">
                                    {games.map((game: any, index: number) => (
                                        <p key={index} className="text-[12px] w-full font-mono ">
                                            {game.home}
                                            {game.homeScore ? ` ${game.homeScore}` : ""}:{game.visit}
                                            {game.visitScore ? ` ${game.visitScore}` : ""} [{game.stadium}]
                                        </p>
                                    ))}
                                </div>
                            );
                        }
                        return null;
                    }}
                />
            )}
        </div>
    );
};

export default ScheduleCalendar;
