import { useEffect, useState } from 'react';
import playerImage from '../../../assets/playerImg.png';

type PlayerData = {
  playerImg: string; // 선수 이미지 URL

  backnum: string;  // 선수 번호
  playerName: string;  // 선수 이름
  engName: string;  // 선수 영문 이름

  birth: string;
  height: string;
  weight: string;
  career: string;
};

// 생년월일 형식을 YYYY.MM.DD로 변경
const formatBirthDate = (birth: string) => {
  if (birth.length !== 8) return birth; 
  const year = birth.slice(0, 4);
  const month = birth.slice(4, 6);
  const day = birth.slice(6, 8);
  return `${year}.${month}.${day}`;
};

const Pitchersdetail = () => {
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch('http://43.201.249.197/api/player/pitcherdetail?pcode=53006');
        if (!response.ok) {
          throw new Error('Failed to fetch player data.');
        }
        const data = await response.json();
        
        // Access the correct path for gameplayer
        if (data && data.data && data.data.gameplayer) {
          const gamePlayer = data.data.gameplayer; 

          //데이터누락시 N/A로 출력
          setPlayerData({
            playerImg: gamePlayer.playerPrvwImg || "", // 선수 이미지 URL (추후 누끼딴 이미지로 변경할 예정)

            backnum: gamePlayer.backnum || "N/A", // 선수 번호
            playerName: gamePlayer.playerName || "N/A", // 선수 이름
            engName: gamePlayer.engName || "N/A", // 선수 영문 이름

            birth: formatBirthDate(gamePlayer.birth || "N/A"), // 선수 생년월일
            height: gamePlayer.height || "N/A", // 선수 키
            weight: gamePlayer.weight || "N/A", // 선수 몸무게
            career: gamePlayer.career || "N/A", // 선수 출신학교
          });
        } else {
          throw new Error('Player data is not available.');
        }
      } catch (error) {
        setError((error as Error).message);
        console.error(error);
      }
    };

    fetchPlayerData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!playerData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex items-start bg-black text-white">
      {/* 선수 이미지  */}
      <div
        className="relative w-[570px] h-[720px] bg-cover bg-center mr-5"
        style={{ backgroundImage: "url('/path/team-logo.png')" }} // 배경 이미지에 kt로고 넣을 예정 
      >
        <img
          /*{src={playerData.playerImg}}*/
          src={playerImage}
          alt={playerData.playerName}
          className="w-[350px] h-[450px] object-contain rounded-lg mx-auto"
        />
      </div>

      {/* 등번호 이름 영어이름*/}
      <div className="pt-[125px] whitespace-nowrap">
        <div className="w-[130px] text-[120px] text-[#808080] float-left tracking-[-3px] leading-[105px] mr-[20px] font-sans">
          {playerData.backnum}
        </div>
        <div className="text-[30px] leading-[45px] block font-sans">
          {playerData.playerName}
        </div>
        <div className="text-[30px] font-thin uppercase opacity-50 font-sans">
          {playerData.engName}
        </div>

        {/* 생년월일 체격 출신학교*/}
        <div className="mt-[55px]">
          <p>
            <span className="font-bold text-[#808080]">생년월일</span> {playerData.birth}
          </p>
          <p>
            <span className="font-bold text-[#808080]">체격</span> {playerData.height}cm, {playerData.weight}kg
          </p>
          <p>
            <span className="font-bold text-[#808080]">출신학교</span> {playerData.career}
          </p>
        </div>
      </div>
    </div>
    
    </>
  
  );
};

export default Pitchersdetail;
