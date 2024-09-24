import { useEffect, useState } from 'react';
import StatusArea from '../../../components/player/StatusArea';
import PlayerCarousel from '../../../components/player/PlayerCarousel';
import PitersInfo from '../../../components/player/PitersInfo';
import { useLocation } from 'react-router-dom';
import TabMenuBar from '../../../components/TabMenuBar';
import BackgroundImage from '../../../components/BackgroundImage';
import playertogether from '../../../assets/kt4.png';
import TabMenuNavbar from '../../../components/TabMenuNavbar';
import '../../../styles/gradient.css';
import PlayerNavbar from '../../../components/PlayerNavbar';
import { api } from '../../../api/api';

// 인터페이스 정의
interface PlayerType {
  backnum: string;
  playerName: string;
  playerPrvwImg: string;
  pcode: string;
}

const Catchersdetail = () => {
  const location = useLocation();
  const pcode = new URLSearchParams(location.search).get('pcode'); // URL에서 pcode를 추출

  // 상태 관리
  const [playerData, setPlayerData] = useState<PlayerType | null>(null); // 개별 선수 데이터
  const [playerList, setPlayerList] = useState<PlayerType[] | null>(null); // 전체 선수 리스트
  const [isSticky, setIsSticky] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const playerTabs = [
    { title: "코칭스텝", route: "../player/coach" },
    { title: "투수", route: "../player/pitcher" },
    { title: "포수", route: "../player/catcher" },
    { title: "내야수", route: "../player/infielder" },
    { title: "외야수", route: "../player/outfielder" },
    { title: "응원단", route: "../player/cheer" },
  ];

  // pcode로 개별 선수 데이터를 불러오는 useEffect
  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        if (pcode) {
          const data = await api.getPlayerPitcherByPcode(pcode); // pcode로 API 호출하여 개별 선수 데이터 가져오기
          setPlayerData(data); // 개별 선수 데이터를 상태에 저장
        }
      } catch (error) {
        console.error("선수 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchPlayerData();
  }, [pcode]);

  // 전체 선수 리스트를 불러오는 useEffect
  useEffect(() => {
    const fetchPlayerList = async () => {
      try {
        const data = await api.getPlayerPitcherImage(); // 전체 선수 리스트 API 호출
        setPlayerList(data); // 전체 선수 리스트를 상태에 저장
      } catch (error) {
        console.error("선수 리스트를 불러오는 중 오류 발생:", error);
      }
    };

    fetchPlayerList();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 630) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setHasAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!playerData || !playerList) {
    return <div>Loading...</div>; // 데이터를 불러오기 전 로딩 상태 표시
  }

  return (
    <div className="bg-black min-h-screen w-full">
      <PlayerNavbar />

      {/* 상단 배너 */}
      <div className="relative">
        <BackgroundImage imageUrl={playertogether} className="w-full title-banner" height="782px" />
        
        {/* TabMenuBar는 배너 위로 오도록 설정 */}
        <div className="absolute top-[422px] w-full px-[144.8px]">
          <TabMenuBar tabs={playerTabs} />
        </div>
      </div>

      {isSticky && (
        <div 
          className={`fixed top-0 left-0 z-50 w-full ${!hasAnimated ? 'animate-diagonal-slide' : ''}`}
          onAnimationEnd={() => setHasAnimated(true)}
        >
          <TabMenuNavbar menuItems={playerTabs} />
        </div>
      )}

      {/* 아래 컴포넌트들 */}
      <div className="relative content_block mt-[40px] px-[144.8px] text-white">
        {/* 개별 선수 기본 정보와 이미지 */}
        <div className="w-full">
          <PitersInfo pcode={pcode} /> {/* pcode에 맞는 선수 데이터를 PitersInfo로 전달 */}
        </div>

        {/* 2024 시즌 기록 */}
        <div className="w-full mt-8">
          <StatusArea pcode={pcode} /> {/* pcode에 맞는 선수 데이터를 StatusArea로 전달 */}
        </div>

        {/* 다른 선수 캐러셀 */}
        <div className="w-full mt-8">
          <PlayerCarousel playerList={playerList} position="catcher" /> {/* 모든 선수 리스트를 PlayerCarousel로 전달 */}
        </div>
      </div>
    </div>
  );
};

export default Catchersdetail;
