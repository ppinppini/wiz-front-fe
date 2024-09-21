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

const Pitchersdetail = () => {
  const location = useLocation();
  const pcode = new URLSearchParams(location.search).get('pcode'); // URL에서 pcode 추출
  const [playerData, setPlayerData] = useState<PlayerType | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // 선수 데이터를 불러오는 useEffect
  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        if (pcode) {
          const data = await api.getPlayerPitcherImage(); // pcode로 API 호출하여 선수 데이터 가져오기
          setPlayerData(data);
        }
      } catch (error) {
        console.error("선수 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchPlayerData();
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

  if (!playerData) {
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
          <TabMenuBar />
        </div>
      </div>

      {isSticky && (
        <div 
          className={`fixed top-0 left-0 z-50 w-full ${!hasAnimated ? 'animate-diagonal-slide' : ''}`}
          onAnimationEnd={() => setHasAnimated(true)}
        >
          <TabMenuNavbar />
        </div>
      )}

      {/* 아래 컴포넌트들 */}
      <div className="relative content_block mt-[40px] px-[144.8px] text-white">
      
      {/* 선수 기본 정보와 이미지 */}
      <div className="w-full">
        <PitersInfo  /> {/* playerData를 PitersInfo로 전달 */}
      </div> 

      {/* 2024 시즌 기록 */}
       <div className="w-full mt-8">
        <StatusArea /> {/* playerData를 StatusArea로 전달 */}
       </div> 

        {/* 다른 선수 캐러셀 */}
        <div className="w-full mt-8">
        <PlayerCarousel playerData={Array.isArray(playerData) ? playerData : [playerData]} />

        </div>

        
      </div>
    </div>
  );
};

export default Pitchersdetail;
