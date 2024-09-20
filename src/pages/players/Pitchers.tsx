import React, { useEffect, useState } from "react";
//import topBanner from '../../assets/top-banner-image.png';
import PlayerNavbar from "../../components/PlayerNavbar";
import TabMenuBar from "../../components/TabMenuBar";
//import TabMenuNavbar from '../../components/TabMenuNavbar';
import BackgroundImage from "../../components/BackgroundImage";
import playertogether from "../../assets/kt4.png";
import PlayerPitcherCardList from "../../components/PlayerPitcherCardList";
import "../../styles/gradient.css";
import TabMenuNavbar from "../../components/TabMenuNavbar";

const Pitchers = () => {
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

        window.addEventListener("scroll", handleScroll);

        // 클린업 함수에서 이벤트 리스너 제거
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <PlayerNavbar />
            <div className="relative">
                <BackgroundImage imageUrl={playertogether} className="title-banner" height="782px" />
                <section className="content_block absolute top-[422px] px-[144.8px]">
                    <div className="mt-[40px]">
                        <TabMenuBar tabs={playerTabs} />
                    </div>
                    <div>
                        <h4 className="text-2xl text-white mt-[80px]">투수</h4>
                        <div className="mt-[100px] content_detail w-[1240px]">
                            <PlayerPitcherCardList />
                        </div>
                    </div>
                </section>
                
                {/* 스크롤 시 나타나는 TabMenuNavbar 컴포넌트 */}
                {isSticky && (
                    <div className={`fixed top-0 left-0 z-50 w-full ${!hasAnimated ? "animate-diagonal-slide" : ""}`} onAnimationEnd={() => setHasAnimated(true)}>
                        <TabMenuNavbar  menuItems={playerTabs}/>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Pitchers;
