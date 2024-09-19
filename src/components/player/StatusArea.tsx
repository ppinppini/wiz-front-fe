import { Tooltip } from 'recharts';
import { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface ChartDataType {
  stat: string;
  statValue: number;
};

const StatusArea = () => {
  const [data, setData] = useState<ChartDataType[]>([]);
  const [stats, setStats] = useState({
    era: "0",
    w: 0,
    l: 0,
    sv: 0,
    kk: 0,
    innDisplay: "0",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.35.51.214/api/player/pitcherdetail?pcode=53006');
        const result = await response.json();
        const season = result.data.seasonsummary;

        const chartData = [
          { stat: '평균자책점', statValue: parseFloat(season.era), maxStat: 20, description: '평균자책점: 투수가 9이닝 동안 허용한 평균 실점' },
          { stat: '승', statValue: season.w, maxStat: 10, description: '승: 투수가 경기에서 승리한 횟수' },
          { stat: '홀드', statValue: season.hold, maxStat: 10, description: '홀드: 중간 계투 투수가 리드를 지킨 경우' },
          { stat: '세이브', statValue: season.sv, maxStat: 10, description: '세이브: 마무리 투수가 리드를 지키고 경기를 마무리한 경우' },
          { stat: '탈삼진', statValue: season.kk, maxStat: 100, description: '탈삼진: 투수가 삼진을 잡은 횟수' },
        ];
        setData(chartData);

        // 스탯 정보
        setStats({
          era: season.era,
          w: season.w,
          l: season.l,
          sv: season.sv,
          kk: season.kk,
          innDisplay: season.innDisplay,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black p-6 text-white w-full mx-auto">
      <h2 className=" w-full font-sans text-[24px] mb-[20px]">2024 SEASON</h2>
      {/* 박스 스타일 추가 */}
      <div className="bg-ktgray rounded-xl p-6">
      {/* 차트와 스탯을 왼쪽과 오른쪽에 각각 배치 */}
      <div className="flex justify-between items-center">
        {/* 차트 */}
        <div className="w-1/2">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="stat" />
            <Radar dataKey="statValue" stroke="#231F20" fill="#F53232" fillOpacity={0.4} />
            <Tooltip formatter={(value: any, name: string, props: any) => [props.payload.description]} />
          </RadarChart>
        </ResponsiveContainer>
        </div>
  
        {/* 스탯 info */}
        <div className="w-1/2 grid grid-cols-2 gap-4 text-center">
          {[
            { label: '평균자책점', value: stats.era },
            { label: '승', value: stats.w },
            { label: '패', value: stats.l },
            { label: '세이브', value: stats.sv },
            { label: '탈삼진', value: stats.kk },
            { label: '이닝', value: stats.innDisplay },
          ].map((stat, index) => (
            <div key={index}>
              <p>{stat.label}</p>
              <h3 className="text-ktred text-3xl">{stat.value}</h3>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
  

export default StatusArea;
