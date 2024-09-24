import { useReactTable, getCoreRowModel, ColumnDef, flexRender } from "@tanstack/react-table";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import { GameBoxScoreScheduleProps, TableRow } from "../../types/types";


const GameBoxScoreSchedule = ({ scoreBoard, schedule }: GameBoxScoreScheduleProps) => {
    console.log("박스스코퍼 점수 컴포넌트 렌더링!");
    const [navigateTo, setNavigateTo] = useState<string | null>(null)

    const columns: ColumnDef<TableRow>[] = [
        { accessorKey: "team", header: "팀" },
        ...Array.from({ length: 12 }, (_, index) => ({
            accessorKey: `${index + 1}`,
            header: `${index + 1}`,
        })),
        { accessorKey: "R", header: "R" },
        { accessorKey: "H", header: "H" },
        { accessorKey: "E", header: "E" },
        { accessorKey: "B", header: "B" },
    ];

    const teamRows: TableRow[] =
        scoreBoard?.map((team) => ({
            team: team?.bhomeName || "Unknown",
            "1": team?.score1 || "-",
            "2": team?.score2 || "-",
            "3": team?.score3 || "-",
            "4": team?.score4 || "-",
            "5": team?.score5 || "-",
            "6": team?.score6 || "-",
            "7": team?.score7 || "-",
            "8": team?.score8 || "-",
            "9": team?.score9 || "-",
            "10": team?.score10 || "-",
            "11": team?.score11 || "-",
            "12": team?.score12 || "-",
            R: team?.run || "-",
            H: team?.hit || "-",
            E: team?.error || "-",
            B: team?.ballfour || "-",
        })) || [];

    const table = useReactTable({
        data: teamRows,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const formatDate = (dateString: string) => {
        const year = dateString.slice(0, 4);
        const month = dateString.slice(4, 6);
        const day = dateString.slice(6, 8);
        return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
    };

    if (navigateTo) {
        return <Navigate to={navigateTo} />;
    }

    return (
        <div className="flex justify-center py-4 border-t-4 border-red-600 mt-32 bg-black">
            <div className="flex flex-col items-center">
                {schedule?.current?.homeLogo ? <img src={schedule?.current?.homeLogo} alt="홈 로고 이미지" className="block" /> : <span>홈 로고가 없습니다</span>}
                <div className="text-3xl text-white">{schedule?.current?.hscore || "N/A"}</div>
                <div className="text-white">{schedule?.current?.home || "홈 팀"}</div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex text-3xl w-full justify-center gap-10 text-white">
                    <button
                        className="rounded-[50%] bg-black text-white"
                        onClick={() => {
                            const prevGame = `/game/boxscore/?gameDate=${schedule.prev?.gameDate}&gmkey=${schedule.prev?.gmkey}`;
                            setNavigateTo(prevGame);
                        }}
                    >
                        &larr;
                    </button>
                    <h1>{schedule?.current?.gameDate ? formatDate(String(schedule.current.gameDate)) : "날짜 없음"}</h1>
                    <button
                        className="rounded-[50%] bg-black text-white"
                        onClick={() => {
                            const nextGame = `/game/boxscore/?gameDate=${schedule.next?.gameDate}&gmkey=${schedule.next?.gmkey}`;
                            setNavigateTo(nextGame);
                        }}
                    >
                        &rarr;
                    </button>
                </div>
                <div className="text-white">
                    {schedule?.current?.gtime || "시간 정보 없음"} {schedule?.current?.stadium || "경기장 정보 없음"} | 관중 : {schedule?.current?.crowdCn || "N/A"}
                </div>
                <div className="overflow-x-auto w-full px-4 bg-black ">
                    <table className="min-w-full border border-gray-300 bg-black ">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id} className="bg-black ">
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} className="bg-red-600 text-white px-4 py-2 text-center border border-gray-300">
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody >
                            {table.getRowModel().rows.map((row, rowIndex) => (
                                <tr key={row.id} className={rowIndex % 2 === 0 ? "bg-black " : ""}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-4 py-2 text-center border border-gray-300 text-white">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex flex-col items-center text-white">
                {schedule?.current?.visitLogo ? <img src={schedule?.current?.visitLogo} alt="원정 로고 이미지" className="block" /> : <span>원정 로고가 없습니다</span>}
                <div className="text-3xl">{schedule?.current?.vscore || "N/A"}</div>
                <div>{schedule?.current?.visit || "원정 팀"}</div>
            </div>
        </div>
    );
};

export default React.memo(GameBoxScoreSchedule);
