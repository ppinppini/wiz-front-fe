import { useReactTable, getCoreRowModel, ColumnDef, flexRender } from "@tanstack/react-table";

interface EtcGameRecord {
    how: string;
    result: string;
}

interface GameBoxScoreMainRecordProps {
    etcgames: EtcGameRecord[];
}

const GameBoxScoreMainRecord = ({ etcgames }: GameBoxScoreMainRecordProps) => {
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

    return (
        <div className="overflow-x-auto w-full px-4">
            <h2 className="text-lg font-bold border-l-4 border-red-600 pl-2 mb-4">주요 기록</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="bg-gray-200 text-gray-800 px-4 py-2 text-center border border-gray-300">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.length > 0 ? (
                        table.getRowModel().rows.map((row, rowIndex) => (
                            <tr key={row.id} className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-4 py-2 text-center border border-gray-300">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
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

export default GameBoxScoreMainRecord;
