import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { TGameSeasonTeamBatterRank } from "../../types/types";
import React from "react";

const TeamBatterRankingTable: React.FC<{
  batterRanking: TGameSeasonTeamBatterRank;
}> = ({ batterRanking }) => {
  const columns: ColumnDef<TGameSeasonTeamBatterRank[0]>[] = [
    {
      accessorKey: "teamName",
      header: "팀명",
    },
    {
      accessorKey: "ab",
      header: "타수",
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
      header: "삼진",
    },
    {
      accessorKey: "hr",
      header: "홈런",
    },
    {
      accessorKey: "hit",
      header: "안타",
    },
    {
      accessorKey: "h2",
      header: "2루타",
    },
    {
      accessorKey: "h3",
      header: "3루타",
    },
    {
      accessorKey: "run",
      header: "득점",
    },
    {
      accessorKey: "rbi",
      header: "타점",
    },
    {
      accessorKey: "sb",
      header: "도루",
    },
    {
      accessorKey: "sf",
      header: "희비",
    },
    {
      accessorKey: "sh",
      header: "희타",
    },
    {
      accessorKey: "ops",
      header: "OPS",
    },
    {
      accessorKey: "slg",
      header: "장타율",
    },
    {
      accessorKey: "iso",
      header: "ISO",
    },
    {
      accessorKey: "sba",
      header: "도루성공률",
    },
  ];

  const table = useReactTable({
    data: batterRanking,
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
                <th
                  key={header.id}
                  className="border py-2 bg-gray-500 text-white"
                >
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
                  ? "bg-red-300 text-[#EC090C] font-bold"
                  : "bg-black text-white "
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border py-2">
                  {String(cell.getValue())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TeamBatterRankingTable;
