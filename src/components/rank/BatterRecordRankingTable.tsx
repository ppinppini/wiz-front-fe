import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { TBatterRecordRank } from "../../types/types";

const BatterRecordRankingTable: React.FC<{
  batterRecord: TBatterRecordRank;
}> = ({ batterRecord }) => {
  const columns: ColumnDef<TBatterRecordRank[0]>[] = [
    {
      accessorKey: "playerName",
      header: "선수명",
    },
    {
      accessorKey: "teamName",
      header: "팀명",
    },
    {
      accessorKey: "bra",
      header: "타율",
    },
    {
      accessorKey: "gamenum",
      header: "경기",
    },
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
      accessorKey: "h2",
      header: "2루타",
    },
    {
      accessorKey: "h3",
      header: "3루타",
    },
    {
      accessorKey: "hr",
      header: "홈런",
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
      accessorKey: "bb",
      header: "볼넷",
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
      accessorKey: "slg",
      header: "장타율",
    },
    {
      accessorKey: "lba",
      header: "출루율",
    },
  ];

  const table = useReactTable({
    data: batterRecord,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="w-full text-xs text-center border-t-2 mt-[100px] border-t-[#DC2626]">
        <table className="w-full border border-gray-200">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border py-2 bg-black text-white"
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
              <tr key={row.id} className="bg-white">
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
    </>
  );
};
export default BatterRecordRankingTable;
