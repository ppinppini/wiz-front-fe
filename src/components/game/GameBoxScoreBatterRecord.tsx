import { useReactTable, getCoreRowModel, ColumnDef, flexRender } from "@tanstack/react-table";
import { BatterRecord, GameBoxScoreBatterRecordProps } from "../../types/types";



const GameBoxScoreBatterRecord = ({ batters, name }: GameBoxScoreBatterRecordProps) => {
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
            accessorKey: "rbi",
            header: "타점",
        },
    ];

    const table = useReactTable({
        data: batters,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-x-auto">
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
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="bg-gray-100">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-4 py-2 text-center border border-gray-300">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GameBoxScoreBatterRecord;
