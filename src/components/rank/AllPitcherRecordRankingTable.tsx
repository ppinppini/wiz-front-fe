import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { TPitcherRecordRank } from "../../types/types";
import React from "react";

const AllPitcherRecordRankingTable: React.FC<{
  allPitcherRecord: TPitcherRecordRank;
}> = ({ allPitcherRecord }) => {
  const columns: ColumnDef<TPitcherRecordRank[0]>[] = [
    {
      accessorKey: "playerName",
      header: "선수명",
    },
    {
      accessorKey: "teamName",
      header: "팀명",
    },
    {
      accessorKey: "era",
      header: "평균자책점",
    },
    {
      accessorKey: "gamenum",
      header: "경기",
    },
    {
      accessorKey: "w",
      header: "승",
    },
    {
      accessorKey: "l",
      header: "패",
    },
    {
      accessorKey: "sv",
      header: "세",
    },
    {
      accessorKey: "hold",
      header: "홀",
    },
    {
      accessorKey: "wra",
      header: "승률",
    },
    {
      accessorKey: "inn",
      header: "이닝",
    },
    {
      accessorKey: "hit",
      header: "피안타",
    },
    {
      accessorKey: "hr",
      header: "피홈런",
    },
    {
      accessorKey: "bb",
      header: "볼넷",
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
      accessorKey: "r",
      header: "실점",
    },
    {
      accessorKey: "er",
      header: "자책점",
    },
  ];

  const table = useReactTable({
    data: allPitcherRecord,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className='w-full text-xs text-center border-t-2 mt-[10px] border-t-[#DC2626]'>
        <table className='w-full border border-gray-200'>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className='bg-gray-100'>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className='border py-2 bg-gray-500 text-white'
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
              <tr key={row.id} className='bg-white'>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className='border py-2 bg-black text-white'>
                    {String(cell.getValue())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllPitcherRecordRankingTable;
