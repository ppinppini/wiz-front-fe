import React, { useState, useEffect } from "react";
import { useReactTable, getCoreRowModel, ColumnDef, flexRender } from "@tanstack/react-table";
import { EtcGameRecord, GameBoxScoreMainRecordProps } from "../../types/types";
import { Skeleton } from "./GameBoxScoreSkeleton";




const GameBoxScoreMainRecord = ({ etcgames }: GameBoxScoreMainRecordProps) => {
    console.log("박스스코퍼 주요기록 컴포넌트 렌더링!");
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    const columns: ColumnDef<EtcGameRecord>[] = [
        {
            accessorKey: "how",
            header: "카테고리",
        },
        {
            accessorKey: "result",
            header: "내용",
        },
    ];

    const table = useReactTable({
        data: etcgames,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    // 데이터 로딩 시뮬레이션
    useEffect(() => {
        setTimeout(() => {
            setLoading(false); // 로딩 상태 해제
        }, 2000); // 예시로 2초 로딩 시간 부여
    }, []);

    return (
        <div className="overflow-x-auto w-[1237.55px] text-white">
            <h2 className="text-lg font-bold border-l-4 border-red-600 pl-2 mb-4 text-white">주요 기록</h2>
            <table className="min-w-full bg-black text-white border border-gray-300">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="bg-red-600  text-white px-4 py-2 text-center border border-white">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {loading ? (
                        // 로딩 중일 때 Skeleton UI 표시
                        Array.from({ length: 5 }).map((_, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-black" : ""}>
                                <td className="px-4 py-2 text-center border border-gray-300 w-[20%]">
                                    <Skeleton width="100%" height="20px"  />
                                </td>
                                <td className="px-4 py-2 text-center border border-gray-300">
                                    <Skeleton width="100%" height="20px" />
                                </td>
                            </tr>
                        ))
                    ) : table.getRowModel().rows.length > 0 ? (
                        // 로딩이 끝났을 때 실제 데이터 표시
                        table.getRowModel().rows.map((row, rowIndex) => (
                            <tr key={row.id} className={rowIndex % 2 === 0 ? "bg-black " : ""}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-4 py-2 text-center border border-gray-300">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        // 데이터가 없을 때 표시
                        <tr>
                            <td colSpan={columns.length} className="text-center py-4">
                                데이터가 없습니다.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default React.memo(GameBoxScoreMainRecord)
