import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { TGameSeasonTeamPitcherRank } from "../../types/types";

const TeamPitcherRankingTable: React.FC<{
  pitcherRanking: TGameSeasonTeamPitcherRank;
}> = ({ pitcherRanking }) => {
  const columns: ColumnDef<TGameSeasonTeamPitcherRank[0]>[] = [
    {
      accessorKey: "teamName",
      header: "팀명",
    },
    {
      accessorKey: "sh",
      header: "희타",
    },
    {
      accessorKey: "sf",
      header: "희비",
    },
    {
      accessorKey: "bb",
      header: "볼넷",
    },
    {
      accessorKey: "ib",
      header: "고의4구",
    },
    {
      accessorKey: "hp",
      header: "사구",
    },
    {
      accessorKey: "kk",
      header: "탈삼진",
    },
    {
      accessorKey: "wp",
      header: "폭투",
    },
    {
      accessorKey: "bk",
      header: "보크",
    },
    {
      accessorKey: "r",
      header: "실점",
    },
    {
      accessorKey: "er",
      header: "자책점",
    },
    {
      accessorKey: "bs",
      header: "블론세이브",
    },
    {
      accessorKey: "whip",
      header: "WHIP",
    },
    {
      accessorKey: "oavg",
      header: "피안타율",
    },
    {
      accessorKey: "qs",
      header: "QS",
    },
  ];

  const table = useReactTable({
    data: pitcherRanking,
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
            <tr
              key={row.id}
              className={
                row.getValue("teamName") === "KT"
                  ? "bg-red-100 text-[#EC090C]"
                  : "bg-white"
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border py-2 bg-black text-white">
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
export default TeamPitcherRankingTable;
