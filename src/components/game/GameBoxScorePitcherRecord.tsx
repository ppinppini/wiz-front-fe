import { useReactTable, getCoreRowModel, ColumnDef, flexRender } from "@tanstack/react-table";
import { GameBoxScorePitcherRecordProps, PitcherRecord } from "../../types/types";


const GameBoxScorePitcherRecord = ({ pitchers,name }: GameBoxScorePitcherRecordProps) => {
  // 테이블 컬럼 정의
  const columns: ColumnDef<PitcherRecord>[] = [
    { accessorKey: "name", header: "선수명" },
    { accessorKey: "inn", header: "이닝" },
    { accessorKey: "w", header: "승" },
    { accessorKey: "l", header: "패" },
    { accessorKey: "s", header: "세" },
    { accessorKey: "ab", header: "타자" },
    { accessorKey: "bf", header: "투구수" },
    { accessorKey: "hit", header: "피안타" },
    { accessorKey: "hr", header: "피홈런" },
    { accessorKey: "bb", header: "사구" },
    { accessorKey: "kk", header: "삼진" },
    { accessorKey: "r", header: "실점" },
    { accessorKey: "er", header: "자책" },
    { accessorKey: "era", header: "평균 자책점" },
  ];

  const table = useReactTable({
    data: pitchers || [], // pitchers 데이터를 테이블에 전달
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto w-full px-4">
      <h2 className="text-lg font-bold border-l-4 border-red-600 pl-2 mb-4">{name} 투수 기록</h2>
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
              <td colSpan={columns.length} className="text-center py-2">
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GameBoxScorePitcherRecord;
