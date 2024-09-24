import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

interface TeamSeasonRankChartData {
  rankList: {
    date: string;
    rank: number;
  }[];
}

const SeasonTeamRankChart: React.FC<TeamSeasonRankChartData> = ({
  rankList,
}) => {
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      const date = `${label?.slice(4, 6)}.${label?.slice(6, 8)}`;
      const rank = payload[0]?.value;

      return (
        <div className="bg-red-500 text-white px-4 py-3 shadow-lg border rounded-lg text-center border-gray-300">
          <h4 className="text-lg font-bold">{`${date}`}</h4>
          <p>KT WIZ :{` ${rank}위`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={rankList}
          margin={{
            top: 50,
            right: 40,
            bottom: 30,
          }}
          className="bg-black"
        >
          <CartesianGrid horizontal={true} vertical={false} color="#E6E6E6" />
          <XAxis
            dataKey="date"
            interval={0}
            textAnchor="end"
            angle={-45}
            tick={{ fontSize: 12, fill: "white" }}
            tickFormatter={(date) =>
              `${date?.slice(4, 6)}.${date?.slice(6, 8)}`
            }
            tickMargin={10}
          />
          <YAxis
            type="number"
            domain={[1, 10]}
            tickCount={10}
            reversed={true}
            ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            tickFormatter={(tick) => `${tick}위`}
            tickMargin={20}
            tick={{ fontSize: 12, fill: "white" }}
          />
          <Line
            type="monotone"
            dataKey="rank"
            stroke="#EC0A0B"
            dot={{
              r: 4,
              fill: "#EC0A0B",
            }}
            activeDot={{
              r: 8,
              stroke: "#FAC1C2",
              strokeWidth: 4,
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export default SeasonTeamRankChart;
