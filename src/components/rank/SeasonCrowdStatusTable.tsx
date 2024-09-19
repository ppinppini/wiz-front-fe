import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { TGameCrowdStatus } from "../../types/types";
import { numberWithCommas } from "../../utils/numberWithCommas";

const SeasonCrowdStatusTable: React.FC<{ crowdStatus: TGameCrowdStatus }> = ({
  crowdStatus,
}) => {
  const rankedCrowdStatus = crowdStatus
    .map((team, index) => ({
      ...team,
      rank: index + 1,
    }))
    .sort((a, b) => b.crowd - a.crowd)
    .map((team, index) => ({
      ...team,
      rank: index + 1,
      averageCrowd: team.game > 0 ? Math.round(team.crowd / team.game) : 0, // calculate average crowd
    }));

  const columns: ColumnDef<(typeof rankedCrowdStatus)[0]>[] = [
    {
      accessorKey: "rank",
      header: "순위",
      cell: ({ getValue }) => numberWithCommas(getValue() as number),
    },
    {
      accessorKey: "teamName",
      header: "팀명",
      cell: ({ getValue }) => numberWithCommas(getValue() as number),
    },
    {
      accessorKey: "game",
      header: "경기 수",
      cell: ({ getValue }) => numberWithCommas(getValue() as number),
    },
    {
      accessorKey: "crowd",
      header: "누적관중",
      cell: ({ getValue }) => numberWithCommas(getValue() as number),
    },
    {
      accessorKey: "averageCrowd",
      header: "평균관중",
      cell: ({ getValue }) => numberWithCommas(getValue() as number),
    },
  ];

  const tableInstance = useReactTable({
    data: rankedCrowdStatus,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='text-xs text-center border-t-2 border-t-[#DC2626]'>
      <table className='w-full border border-gray-200'>
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className='bg-gray-100'>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='border py-2'>
                  {typeof header.column.columnDef.header === "function"
                    ? header.column.columnDef.header(header.getContext())
                    : header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={
                row.getValue("teamName") === "KT"
                  ? "bg-red-100 text-[#EC090C]"
                  : "bg-white"
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='border py-2'>
                  {typeof cell.getValue() === "number"
                    ? numberWithCommas(cell.getValue() as number)
                    : String(cell.getValue())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeasonCrowdStatusTable;
