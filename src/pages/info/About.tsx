import BackgroundImage from "../../components/BackgroundImage";
import PageLocator from "../../components/PageLocator";
import TabMenuBar from "../../components/TabMenuBar";
import playertogether from "../../assets/kt5.jpg";
import { useEffect, useState } from "react";
import TabMenuNavbar from "../../components/TabMenuNavbar";

const KtWizAbout = () => {
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
    const aboutTabs = [
        { title: "kt Wiz는?", route: "../ktwiz/about" },
        { title: "BI는?", route: "../ktwiz/history" },
    ];
    return (
        <div className="bg-black">
            <BackgroundImage imageUrl={playertogether} className="title-banner" height="782px" />
            <TabMenuBar tabs={aboutTabs} />
            <PageLocator pagePath="> kt wiz > kt wiz는? >" currentPage="구단 소개" />
            {isSticky && (
                <div className={`fixed top-0 left-0 z-50 w-full ${!hasAnimated ? "animate-diagonal-slide" : ""}`} onAnimationEnd={() => setHasAnimated(true)}>
                    <TabMenuNavbar menuItems={aboutTabs} />
                </div>
            )}
            <section className="flex flex-col px-40 mt-[2em]">
                <img className="block mb-[4em]" src="https://www.ktwiz.co.kr/static/media/team_about_banner.8a91c96f.png" alt="ktWizAbout 1" />

                <article className="mb-[6rem]">
                    <h1 className="text-[#ec090b] font-bold text-[2rem] mb-[1em]">신비롭고 강력한 힘, 상상의 야구 실현</h1>
                    <div className="w-[40px] h-[3px] mb-[2em] bg-[#f03b3c]"></div>
                    <p className="text-white text-justify text-[1rem] leading-6">
                        kt wiz는 2013년, 제 10구단에 대한 국민들의 강한 열망, 경기도 및 수원시 그리고 KT그룹의 뜨거운 유치 열정으로 비상한 솜씨와 비범한 재능을 가진 마법사, wiz라는 이름으로 신비롭고
                        강력한 힘으로 상상의 야구를 실현하겠다는 의지를 가지고 새롭게 출범하였습니다.
                    </p>
                </article>
                <article className="mb-[6rem] flex gap-6">
                    <div>
                        <h1 className="text-[#ec090b] font-bold  text-[2rem] mb-[1em]">명문구단을 위한 철저한 플랜!</h1>
                        <div className="w-[40px] h-[3px] mb-[2em] bg-[#f03b3c]"></div>
                        <p className="text-white text-justify text-[1rem] leading-6">
                            명문구단이 되기 위한 철저한 중장기 플랜을 통해 kt wiz의 감독 및 코칭 스태프, 선수들을 구성하고 있습니다.
                            <br />
                            기존 수원야구장을 대규모로 중축하고 리모델링하여 최적의 야구관람 시설을 갖추었습니다. 굵은 땀방울과 함께 전지 훈련을 수행하고 2014년 퓨처스리그에 출전하여 기량을 쌓은 후,
                            2015년 1군 리그에 성공적으로 데뷔하여 야구 팬들에게 kt wiz 이름 그대로 마법과 같은 야구를 펼쳐보이기 위해 노력을 다하고 있습니다.
                        </p>
                    </div>

                    <img className="block max-[992px]:hidden" src="https://www.ktwiz.co.kr/static/media/team_about_article_img_2.e8c98a30.png" alt="ktWizAbout2" />
                </article>
                <article className="mb-[6rem] flex gap-6">
                    <img className="bg-cover block max-[992px]:hidden" src="https://www.ktwiz.co.kr/static/media/team_about_article_img_3.c764e4b8.png" alt="ktWizAbout2" />

                    <div>
                        <h1 className="text-[#ec090b] font-bold  text-[2rem] mb-[1em]">복합 문화공간의 첨단 야구장!</h1>
                        <div className="w-[40px] h-[3px] mb-[2em] bg-[#f03b3c]"></div>
                        <p className="text-white text-justify text-[1rem] leading-6">
                            kt그룹의 우수한 ICT기술을 활용한 ‘빅 테인먼트(BIC Tainment)’ 기술을 적극 활용하여 야구를 사랑하는 팬 여러분께 차별화된 야구 콘텐츠를 제공하고 남녀노소 누구나 즐겁고 편하게
                            야구를 즐길 수 있는 복합 문화공간의 첨단 야구장을 만들 예정입니다
                        </p>
                    </div>
                </article>
                <article className="mb-[6rem]">
                    <h1 className="text-[#ec090b] font-bold  text-[2rem] mb-[1em]">재미와 즐거움을 추구하는 근성 있는 구단!</h1>
                    <div className="w-[40px] h-[3px] mb-[2em] bg-[#f03b3c]"></div>
                    <p className="text-white text-justify text-[1rem] leading-6">
                        창단 과정에서 경기도민과 수원시민들이 보내주신 성원과 기대에 보답하기 위해 앞으로도 야구를 통한 즐거운 여가 문화를 제공할 것이며 팬들과 함께 할 수 있는 새롭고 다양한 마케팅을
                        전개해 나가 “재미와 즐거움을 추구하는 근성있는 구단”이라는 kt sports의 확고한 비전을 실행하고 다년간 쌓인 스포츠 구단 운영 노하우로{" "}
                        <span className="text-[#ec090b]">그라운드 안팎에서 그 동안 없던 새로운 야구를 kt wiz가 이루어 가겠습니다.</span>
                    </p>
                </article>
            </section>
            <img className="block " src="https://www.ktwiz.co.kr/static/media/team_about_bottom_2024.213552dc.png" alt="" />
        </div>
    );
};
export default KtWizAbout;
