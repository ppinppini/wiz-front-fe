import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { TGameCrowdStatus } from "../../types/types";
import { numberWithCommas } from "../../utils/numberWithCommas";

const SeasonCrowdStatusChart: React.FC<{ crowdStatus: TGameCrowdStatus }> = ({
  crowdStatus,
}) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={crowdStatus}
          margin={{
            top: 50,
            right: 40,
            bottom: 30,
            left: 25,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} color="#E6E6E6" />
          <XAxis
            dataKey="teamName"
            interval={0}
            tick={{ fontSize: 16 }}
            tickMargin={10}
          />
          <YAxis
            type="number"
            domain={[0, 1400000]}
            tickCount={8}
            tickMargin={20}
            tick={{ fontSize: 12 }}
            tickFormatter={numberWithCommas}
          />
          <Bar dataKey="crowd" barSize={15}>
            {crowdStatus.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.teamName === "KT" ? "#FF5733" : "#404046"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default SeasonCrowdStatusChart;
