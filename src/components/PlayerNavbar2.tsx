import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const PlayerNavbar2 = () => {
    const [isBlack, isSetBlack] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    //const [navHeight, setNavHeight] = useState(0);

    // useEffect(() => {
    //     // 약간의 지연을 두고 높이를 다시 계산

    //     if (navRef.current) {
    //         setNavHeight(navRef.current.offsetHeight);
    //     }
    // }, []);

    return (
        <>
            <nav ref={navRef} className="relative z-50 w-full group">
                {/* 지속적인 영역 */}
                <div
                    className="flex justify-center gap-10 px-4 pt-6 pb-2 text-white transition-colors duration-700 ease-in-out bg-black hover:bg-white hover:text-black"
                    onMouseEnter={() => isSetBlack(true)}
                    onMouseLeave={() => isSetBlack(false)}
                    style={{height: '80px'}} //새로 추가
                >
                    <div>
                        <Link to={"/"}><img src={isBlack ? "https://www.ktwiz.co.kr/v2/imgs/img-logo-black.svg" : "https://www.ktwiz.co.kr/v2/imgs/img-logo.svg"} alt="KT로고" className="w-24" /></Link>
                    </div>
                    <div className="flex items-end ">

                        <ul className="flex gap-14 items-end text-[17px]">
                            <li className="relative ">
                                <div className="border-b-2 border-transparent hover:border-red-500 ">kt wiz</div>

                                <ul className="  absolute left-0 top-full hidden text-[14px] group-hover:block  space-y-2  mt-2 w-20 ">
                                    <li>
                                        <Link to={"/ktwiz/about"}>KT Wiz는?</Link>
                                    </li>
                                    <li>
                                        <Link to={"/ktwiz/bi/symbol"}>구단 BI</Link>
                                    </li>

                                    <li>
                                        <Link to={"/ktwiz/policy/regular"}>회원 정책</Link>
                                    </li>

                                    <li>
                                        <Link to={"/ktwiz/sponsor"}>스폰서</Link>
                                    </li>

                                    <li>
                                        <Link to={"/ktwiz/wallpaper"}>월페이퍼</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">wiz park</div>
                                <ul className="absolute left-0 top-full hidden text-[14px] group-hover:block space-y-2 mt-2 w-36 ">
                                    <li>
                                        <Link to={"/wizpark/intro"}>수원 kt wiz park</Link>
                                    </li>
                                    <li>
                                        <Link to={"/wizpark/parking"}>주차 예약</Link>
                                    </li>
                                    <li>
                                        <Link to={"/wizpark/location"}>찾아 오기</Link>
                                    </li>
                                    <li>
                                        <Link to={"/wizpark/iksan"}>익산야구장</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">Game</div>
                                <ul className="absolute left-0 top-full hidden text-[14px] group-hover:block space-y-2 mt-2 w-20">
                                    <li>
                                        <Link to={"/game/regular/schedule"}>정규리그</Link>
                                    </li>
                                    <li>
                                        <Link to={"/game/futures/schedule"}>퓨처스리그</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">Player</div>
                                <ul className="absolute left-0 top-full hidden text-[14px] group-hover:block space-y-2 mt-2 w-20">
                                    <li>
                                        <Link to={"/player/coach"}>코칭스텝</Link>
                                    </li>
                                    <li>
                                        <Link to={"/player/pitcher"}>투수</Link>
                                    </li>
                                    <li>
                                        <Link to={"/player/catcher"}>타자</Link>
                                    </li>
                                    <li>
                                        <Link to={"/player/cheer"}>응원단</Link>
                                    </li>
                                    <li>
                                        <Link to={"/player/song"}>응원가</Link>
                                    </li>
                                    <li>
                                        <Link to={"/player/song-copyright"}>응원가 저작권</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">Media</div>
                                <ul className="absolute left-0 top-full hidden text-[14px] group-hover:block space-y-2 mt-2 w-20">
                                    <li>
                                        <Link to={"/media/wiznews"}>wiz 뉴스</Link>
                                    </li>
                                    <li>
                                        <Link to={"/media/wizstory"}>wiz 스토리</Link>
                                    </li>
                                    <li>
                                        <Link to={"/media/wizstory"}>시구자 정보</Link>
                                    </li>
                                    <li>
                                        <Link to={"/media/firstpitch"}>wiz 포토</Link>
                                    </li>
                                    <li>
                                        <Link to={"/media/photos/1"}>하이라이트</Link>
                                    </li>
                                    <li>
                                        <Link to={"/media/live/pts"}>Live 영상모음</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">Shop</div>
                            </li>
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">스폰서</div>
                            </li>
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">티켓 구매</div>
                                <ul className="absolute left-0 top-full hidden text-[14px] group-hover:block space-y-2 mt-2 w-28">
                                    <li>
                                        <Link to={"/ticket/reservation"}>티켓예매</Link>
                                    </li>
                                    <li>
                                        <Link to={"/ticket/group"}>단체관람</Link>
                                    </li>
                                    <li>
                                        <Link to={"/ticket/seatmap"}>입장 및 좌석 정보</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-end">
                        <ul className="flex md:gap-3 md:text-[14px] text-[#8a8b8e]">
                            <li>
                                <Link to={"/login"}>로그인</Link>
                            </li>
                            <li>
                                <Link to={"/join/step"}>회원가입</Link>
                            </li>
                            <li>
                                <Link to={"http://kt-sports.co.kr/sports/site/main.do"}>
                                    <img
                                        src={isBlack ? "https://www.ktwiz.co.kr/v2/imgs/img-logo-ktsports-bk@2x.png" : "https://www.ktwiz.co.kr/v2/imgs/img-logo-ktsports@2x.png"}
                                        alt="kt로고"
                                        className="w-10 md:w-14"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* 기존에 있던 것 삭제 */}
        </>
    );
};

export default PlayerNavbar2;