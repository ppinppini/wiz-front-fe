import { useEffect, useState } from 'react';
import PlayerNavbar from '../../components/PlayerNavbar';
import TabMenuBar from '../../components/TabMenuBar';
import BackgroundImage from '../../components/BackgroundImage';
import playertogether from '../../assets/kt5.jpg';
import PlayerCheerCardList from '../../components/PlayerCheerCardList';
import '../../styles/gradientnew.css';
import TabMenuNavbar from '../../components/TabMenuNavbar';


const CheerTeam = () => {
  const playerTabs = [
    { title: "코칭스텝", route: "../player/coach" },
    { title: "투수", route: "../player/pitcher" },
    { title: "포수", route: "../player/catcher" },
    { title: "내야수", route: "../player/infielder" },
    { title: "외야수", route: "../player/outfielder" },
    { title: "응원단", route: "../player/cheer" },
];
  const [isSticky, setIsSticky] = useState(false);

  const [hasAnimated, setHasAnimated] = useState(false);


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

    // 클린업 함수에서 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <> 
    <div className='relative flex flex-col items-center'>
      <PlayerNavbar/>
      <BackgroundImage imageUrl={playertogether} className="title-banner" height="782px" zIndex={-1} />
      <div className='flex flex-col justify-center w-full'>
        <section className='z-40 w-full content_block pb-[300px] -mt-[100px]'>
            <div className='mt-[40px]'>
              <TabMenuBar tabs={playerTabs} tabtitle='응원단'/>
            </div>
            <div className='flex flex-col items-center mx-auto'>
              <h4 className='text-2xl text-white mt-[80px] w-[1240px]'>응원단</h4>
              <div className='mt-[100px] content_detail w-[1240px]'>
                <PlayerCheerCardList />
              </div>
            </div>
        </section>

        {/* 스크롤 시 나타나는 TabMenuNavbar 컴포넌트 */}
        {isSticky && (
          <div 
            className={`fixed top-0 left-0 z-50 w-full ${
              !hasAnimated ? 'animate-diagonal-slide' : ''
            }`}
            onAnimationEnd={() => setHasAnimated(true)}
          >
            <TabMenuNavbar menuItems={playerTabs} tabtitle='응원단'/>
          </div>
        )}
       
      </div>
    </div>  
    <footer className="relative py-6 text-center text-white bg-gray-800">
      <p>© 2024 Your Company Name. All rights reserved.</p>
    </footer> 
  </> 
  );
};

export default CheerTeam;


