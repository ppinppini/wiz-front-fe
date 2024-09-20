import React, { useEffect, useState } from 'react';
import StatusArea from '../../../components/player/StatusArea';
import PlayerCarousel from '../../../components/player/PlayerCarousel';
import PitersInfo from '../../../components/player/PitersInfo';
import { useLocation } from 'react-router-dom';
import TabMenuBar from '../../../components/TabMenuBar';
import BackgroundImage from '../../../components/BackgroundImage';
import playertogether from '../../../assets/kt4.png';
import TabMenuNavbar from '../../../components/TabMenuNavbar'; // 추가
import '../../../styles/gradient.css';
import PlayerNavbar from '../../../components/PlayerNavbar';

const Pitchersdetail = () => {
  const location = useLocation();
  const pcode = location?.state?.pcode;
  const playerTabs = [
    { title: "코칭스텝", route: "../player/coach" },
    { title: "투수", route: "../player/pitcher" },
    { title: "포수", route: "../player/catcher" },
    { title: "내야수", route: "../player/infielder" },
    { title: "외야수", route: "../player/outfielder" },
    { title: "응원단", route: "../player/cheer" },
];
  // 스크롤 상태를 관리하는 state
  const [isSticky, setIsSticky] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // 스크롤을 감지해서 navbar 고정 상태를 설정하는 로직
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 630) { // 특정 스크롤 위치에서 상단 고정
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setHasAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className="bg-black min-h-screen w-full">
      <PlayerNavbar/>

      {/* 상단 배너 */}
      <div className="relative">
        <BackgroundImage imageUrl={playertogether} className="w-full title-banner" height="782px" />
        
        {/* TabMenuBar는 배너 위로 오도록 설정 */}
        <div className="absolute top-[422px] w-full px-[144.8px]">
          <TabMenuBar tabs={playerTabs}/>
        </div>
      </div>

      {/* 스크롤 시 나타나는 TabMenuNavbar 컴포넌트 */}
      {isSticky && (
        <div 
          className={`fixed top-0 left-0 z-50 w-full ${
            !hasAnimated ? 'animate-diagonal-slide' : ''
          }`}
          onAnimationEnd={() => setHasAnimated(true)}
        >
          <TabMenuNavbar menuItems={playerTabs}/>
        </div>
      )}

      {/* 아래 컴포넌트들 */}
      <div className="relative content_block mt-[40px] px-[144.8px] text-white">

        {/* 플레이어 기본정보와 이미지 */}
        <div className="w-full">
          <PitersInfo />
        </div>

        {/* 2024 시즌 기록 */}
        <div className="w-full mt-8">
          <StatusArea />
        </div>

        {/* 다른 플레이어 캐러셀 */}
        <div className="w-full mt-8">
          <PlayerCarousel />
        </div>
        
      </div>

    </div>
  );
};

export default Pitchersdetail;
