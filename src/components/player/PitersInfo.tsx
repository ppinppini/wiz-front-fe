import { useEffect, useState } from "react";
import IconPlayerPitcher from "../../assets/IconPlayerPitcher.png";

// 선수 데이터 인터페이스 정의
interface PlayerData {
  playerPrvwImg: string;
  backnum: string;
  playerName: string;
  engName: string;
  birth: string;
  height: string;
  weight: string;
  career: string;
  position: string;
  hittype: string;
}

interface PitersInfoProps {
  pcode: string | null; // pcode 받음
}

// 생년월일 형식을 YYYY.MM.DD로 변경하는 함수
const formatBirthDate = (birth: string) => {
  if (birth.length !== 8) return birth;
  const year = birth.slice(0, 4);
  const month = birth.slice(4, 6);
  const day = birth.slice(6, 8);
  return `${year}.${month}.${day}`;
};

const PitersInfo: React.FC<PitersInfoProps> = ({ pcode }) => {
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`http://3.35.51.214/api/player/pitcherdetail?pcode=${pcode}`);
        if (!response.ok) {
          throw new Error("Failed to fetch player data.");
        }
        const data = await response.json();

        if (data && data.data && data.data.gameplayer) {
          const gamePlayer = data.data.gameplayer;
          setPlayerData({
            playerPrvwImg: gamePlayer.playerPrvwImg || "N/A",
            backnum: gamePlayer.backnum || "N/A",
            playerName: gamePlayer.playerName || "N/A",
            engName: gamePlayer.engName || "N/A",
            birth: formatBirthDate(gamePlayer.birth || "N/A"),
            height: gamePlayer.height || "N/A",
            weight: gamePlayer.weight || "N/A",
            career: gamePlayer.career || "N/A",
            position: gamePlayer.position || "N/A",
            hittype: gamePlayer.hittype || "N/A",
          });
        } else {
          throw new Error("Player data is not available.");
        }
      } catch (error) {
        setError((error as Error).message);
        console.error(error);
      }
    };

    fetchPlayerData();
  }, [pcode]); // pcode가 변경될 때마다 데이터를 다시 불러옴

  // 로딩 및 에러 처리
  if (error) {
    return <div>{error}</div>;
  }

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-start bg-black p-8">
      {/* 선수 이미지 */}
      <div className="relative w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
        <div
          className="w-full h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url('/path/team-logo.png')" }}
        >
          <img
            src={playerData.playerPrvwImg}
            alt={playerData.playerName}
            className="object-contain w-80 h-auto mx-auto"
          />
        </div>
      </div>

      {/* 선수 정보 */}
      <div className="md:w-2/3 flex flex-col justify-center pl-6 ml-[150px]">
        <div className="flex mb-4">
          <div className="text-gray-400 text-6xl font-bold mr-6">
            {playerData.backnum}
          </div>
          <div>
            <div className="text-3xl font-semibold">{playerData.playerName}</div>
            <div className="text-xl font-light uppercase text-gray-500">
              {playerData.engName}
            </div>
          </div>
        </div>
        <div>
          <img
            src={IconPlayerPitcher}
            alt={playerData.playerName}
            className="w-[87px] h-[87px] float-left mr-[15px] !rounded-lg"
          />
          <div className="pb-3 text-[26px] block">{playerData.position}</div>
          <div className="block text-[26px]">{playerData.hittype}</div>
        </div>

        {/* 추가 정보 */}
        <div className="text-lg leading-8 mt-[30px]">
          <p className="mb-2">
            <span className="font-semibold text-gray-600">생년월일 </span> {playerData.birth}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-600">체격 </span> {playerData.height}cm, {playerData.weight}kg
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-600">출신학교 </span> {playerData.career}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PitersInfo;
