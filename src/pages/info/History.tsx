import HistoryCard from "../../components/HistoryCard";
import PageLocator from "../../components/PageLocator";
import playertogether from "../../assets/kt6.jpg";
import TabMenuBar from "../../components/TabMenuBar";
import BackgroundImage from "../../components/BackgroundImage";
import { useEffect, useState } from "react";
import TabMenuNavbar from "../../components/TabMenuNavbar";

const KtWizHistory = () => {
    const aboutTabs = [
        { title: "kt Wiz는?", route: "../ktwiz/about" },
        { title: "BI는?", route: "../ktwiz/history" },
    ];
    const historyData = [
        {
            id: 0,
            title: "2013",
            text: "kt sports 독립법인 출범,kt wiz 프로야구단 창단",
        },
        {
            id: 1,
            title: "2014",
            text: "Kt wiz 퓨처스리그 데뷔,수원 케이티 위즈 파크 준공",
        },
        {
            id: 2,
            title: "2015",
            text: "kt wiz 프로야구단 1군리그 데뷔,kt wiz 공식 어플리케이션 wizzap(위잽) 출시,kt wiz 정규리그 첫 승(vs 넥센),장성호 2,100안타 달성(KBO 통산안타 2위),kt wiz 신생구단 창단 최다관중 신기록 달성(53만 1696명)",
        },
        {
            id: 3,
            title: "2016",
            text: "kt wiz 수도권 더비 'W-Match' 개최(vs SK),kt wiz 통산 100승 달성,kt wiz 김진욱 2대 감독 취임",
        },
        {
            id: 4,
            title: "2017",
            text: "케이티 위즈파크 증축(2만 2천석),이진영 통산 2천 경기-2천 안타 달성(KBO 역대 5번째),제 1회 kt wiz - SK Wyverns 드림 야구대회 개최,kt wiz 위안부 피해 할머니(이옥선,박옥선) 시구/시타 및 후원",
        },
        {
            id: 5,
            title: "2018",
            text: "Kt wiz 2018 스포노믹스 대상 수상-연고지 상생과 차별화된 팬서비스로, 프로스포츠 구단 부문 대상 수상-IoT(사물인터넷) 기반으로 공기질 정보 제공 및 미세먼지 저감 활동 추진,케이티 위즈 파크, KBO 최초 미세먼지 측정/저감 캠페인 시행,2018 자카르타-팔렘방 아시안게임에서 황재균(야구) 금메달,kt wiz 이강철 3대 감독 취임-KBO 역대 최고 언더핸드 투수 출신으로, 두산 수석코치를 역임한 이강철 감독 선임,kt wiz 강백호 구단 최초 KBO 신인상 수상-KBO 역대 고졸 신인 최다 홈런(29개)을 기록하는 등 뛰어난 활약으로 압도적 선정",
        },
        {
            id: 6,
            title: "2019",
            text: "위즈파크 5G 스타디움 개관식,구단 창단 최초 9연승 달성,쿠에바스 구단 최다승 갱신(13승),배제성 구단 최초 국내선수 두자리 승수 달성,창단 첫 5할 승률로 시즌 마감(71승 2무 71패),로하스 KBO 외야수 골든글러브 수상,대한민국 스포츠산업대상(대통령상) 수상",
        },
        {
            id: 7,
            title: "2020",
            text: "데스파이네 구단 최다승 경신(14승),정규리그 2위 및 포스트시즌 진출 확정 (81승 62패),창단 첫 플레이오프 출전,2020 KBO리그 로하스 MVP 및 소형준 신인왕 수상 (KBO 역대 6번째),황재균, 로하스, 강백호 2020 KBO 골든글러브 수상",
        },
        {
            id: 8,
            title: "2021",
            text: "이강철 감독 200승 달성 (KBO 역대 31번째),김재윤 구단 최초 통산 100세이브 달성 (KBO 역대 17번째),창단 최초 시즌 70승 선점,1위결정전 승리로 창단 첫 정규시즌 우승,한국시리즈 4전 전승으로 창단 첫 통합 우승",
        },
        {
            id: 9,
            title: "2022",
            text: "박병호 9년 연속 20홈런 (KBO 최초),팀 10,000안타,팀 1,000홈런,이강철 감독 300승 (KBO 역대 20번째),3년 연속 포스트시즌 진출,2022 KBO 시상식 <박병호 홈런상, 엄상백 승률상>,2022 KBO 골든글러브 <박병호 1루수>",
        },
        {
            id: 10,
            title: "2023",
            text: "kt wiz 창단 10주년,7.11 김재윤 kt 최초 150세이브 (역대 9번째),9.20 쿠에바스 KBO 8월 월간 MVP 수상,10.7 강백호, 박영현 2022 항저우 아시안게임 금메달,10.10 정규리그 2위 및 4년 연속 포스트시즌 진출 확정 (79승 62패),10.10 구단 한 시즌 역대 최다 관중 달성 (697,350명),- 종전 : 2017년 686,541명,11.13 한국시리즈 준우승,11.27 2023 KBO 시상식,-쿠에바스 승률상,-박영현 홀드상,-박병호 수비상 1루수",
        },
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
        <div className="bg-black text-white -z-10">
            <BackgroundImage imageUrl={playertogether} className="title-banner" height="782px" />
            <TabMenuBar tabs={aboutTabs} />
            <PageLocator pagePath="> kt wiz > kt wiz는?>" currentPage="구단 연혁" />
            <HistoryCard historyData={historyData} />
            {/* 스크롤 시 나타나는 TabMenuNavbar 컴포넌트 */}
            {isSticky && (
                <div className={`fixed top-0 left-0 z-50 w-full ${!hasAnimated ? "animate-diagonal-slide" : ""}`} onAnimationEnd={() => setHasAnimated(true)}>
                    <TabMenuNavbar menuItems={aboutTabs} />
                </div>
            )}
        </div>
    );
};
export default KtWizHistory;
