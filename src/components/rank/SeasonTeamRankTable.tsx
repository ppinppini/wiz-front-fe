import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { TGameSeasonTeamRecord } from "../../types/types";

const SeasonTeamRankTable: React.FC<{ recordList: TGameSeasonTeamRecord }> = ({
  recordList,
}) => {
  const columns: ColumnDef<TGameSeasonTeamRecord[0]>[] = [
    {
      accessorKey: "rank",
      header: "순위",
    },
    {
      accessorKey: "teamName",
      header: "팀명",
    },
    {
      accessorKey: "game",
      header: "경기 수",
    },
    {
      accessorKey: "win",
      header: "승",
    },
    {
      accessorKey: "lose",
      header: "패",
    },
    {
      accessorKey: "drawn",
      header: "무",
    },
    {
      accessorKey: "wra",
      header: "승률",
    },
    {
      accessorKey: "ab",
      header: "타수",
    },
    {
      accessorKey: "continue1",
      header: "연속",
    },
    {
      accessorKey: "bra",
      header: "출루율",
    },
    {
      accessorKey: "hra",
      header: "장타율",
    },
    {
      accessorKey: "era",
      header: "타율",
    },
    {
      accessorKey: "er",
      header: "자책점",
    },
    {
      accessorKey: "r",
      header: "득점",
    },
    {
      accessorKey: "run",
      header: "실점",
    },
    {
      accessorKey: "hr",
      header: "홈런",
    },
  ];

  const table = useReactTable({
    data: recordList,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="text-xs text-center border-t-2 border-t-[#DC2626]">
      <table className="w-full border border-gray-200">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border py-2 bg-black text-white">
                  {typeof header.column.columnDef.header === "function"
                    ? header.column.columnDef.header(header.getContext())
                    : header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            // KT만 배경색 다르게 처리해야함
            <tr
              key={row.id}
              className={
                row.getValue("teamName") === "KT"
                  ? "bg-red-200 text-[#EC090C] font-bold"
                  : "bg-black text-white "
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border py-2">
                  {String(cell.getValue())}{" "}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeasonTeamRankTable;
