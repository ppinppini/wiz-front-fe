import {
  BarChart,
  Bar,
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

import { TGameCrowdStatus } from "../../types/types";

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
            textAnchor="center"
            tick={{ fontSize: 12 }}
            tickMargin={10}
          />
          <YAxis
            type="number"
            domain={[0, 1400000]}
            tickCount={8}
            reversed={false}
            tickMargin={20}
            tick={{ fontSize: 12 }}
          />
          <Bar type="monotone" dataKey="rank" stroke="#EC0A0B" />
          {/* <Tooltip
            content={<CustomTooltip />} // 툴팁은 커스텀 툴팁으로 설정
            cursor={false} // dot에 호버링시 십자선 숨김
          /> */}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default SeasonCrowdStatusChart;
