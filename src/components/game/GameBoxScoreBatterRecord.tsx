import React, { useState, useEffect } from "react";
import { useReactTable, getCoreRowModel, ColumnDef, flexRender } from "@tanstack/react-table";
import { BatterRecord, GameBoxScoreBatterRecordProps } from "../../types/types";
import { Skeleton } from "./GameBoxScoreSkeleton";


const GameBoxScoreBatterRecord = ({ batters, name }: GameBoxScoreBatterRecordProps) => {
    const [loading, setLoading] = useState(true); 
    const columns: ColumnDef<BatterRecord>[] = [
        {
            accessorKey: "position",
            header: "포지션",
        },
        {
            accessorKey: "name",
            header: "이름",
        },
        ...Array.from({ length: 12 }, (_, index) => ({
            accessorKey: `inn${index + 1}`,
            header: `${index + 1}회`,
            cell: ({ getValue }: any) => getValue() || "", // 이닝별 결과 표시
        })),
        {
            accessorKey: "ab",
            header: "타수",
        },
        {
            accessorKey: "run",
            header: "득점",
        },
        {
            accessorKey: "hit",
            header: "안타",
        },
        {
            accessorKey: "rbi", // 타점 부분
            header: "타점",
            cell: ({ getValue }: any) => loading ? <Skeleton width="30px" height="20px" /> : getValue() || "", // 타점 데이터가 로딩 중일 때 Skeleton 표시
        },
    ];

    const table = useReactTable({
        data: batters,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    // 데이터 로딩 시뮬레이션
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);  // 로딩 상태 해제
        }, 2000);  // 예시로 2초 로딩 시간
    }, []);

    return (
        <div className="overflow-x-auto text-white w-[1237.55px]">
            <h2 className="text-lg font-bold border-l-4 border-red-600 pl-2 mb-4">{name} 타자 기록</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="bg-red-600 text-white px-4 py-2 text-center border border-gray-300">
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
                                <td className="px-4 py-2 text-center border bg-black text-white border-gray-300">
                                    <Skeleton width="50px" height="20px" />
                                </td>
                                <td className="px-4 py-2 text-center border bg-black text-white border-gray-300">
                                    <Skeleton width="100px" height="20px" />
                                </td>
                                {Array.from({ length: 12 }).map((_, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2 text-center border bg-black text-white border-gray-300">
                                        <Skeleton width="30px" height="20px" />
                                    </td>
                                ))}
                                <td className="px-4 py-2 text-center border bg-black text-white border-gray-300">
                                    <Skeleton width="30px" height="20px" />
                                </td>
                                <td className="px-4 py-2 text-center border bg-black text-white border-gray-300">
                                    <Skeleton width="30px" height="20px" />
                                </td>
                                <td className="px-4 py-2 text-center border bg-black text-white border-gray-300">
                                    <Skeleton width="30px" height="20px" /> {/* 타점에 Skeleton 적용 */}
                                </td>
                            </tr>
                        ))
                    ) : (
                        table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="bg-black text-white">
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-4 py-2 text-center border border-gray-300">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default React.memo(GameBoxScoreBatterRecord);
