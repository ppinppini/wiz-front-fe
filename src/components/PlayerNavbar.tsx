import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const PlayerNavbar = () => {
    const [isBlack, setIsBlack] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    

    return (
        <>
            <nav
                ref={navRef}
                className="absolute z-50 w-full transition-all duration-700 ease-in-out group"
                onMouseEnter={() => {
                    setIsBlack(true);
                    setIsExpanded(true);
                }}
                onMouseLeave={() => {
                    setIsBlack(false);
                    setIsExpanded(false);
                }}
                style={{
                    height: isExpanded ? '350px' : '80px',
                    backgroundColor: isExpanded ? 'white' : 'black',
                }}
            >
                {/* 지속적인 영역 */}
                <div
                    className="flex justify-center gap-10 px-4 pt-6 pb-2 transition-colors duration-700 ease-in-out"
                    style={{ 
                        backgroundColor: isExpanded ? 'white' : 'black',
                        color: isExpanded ? 'black' : 'white'  
                    }}
                >
                    <div>
                        <Link to="/">
                            <img
                                src={
                                    isBlack
                                        ? 'https://www.ktwiz.co.kr/v2/imgs/img-logo-black.svg'
                                        : 'https://www.ktwiz.co.kr/v2/imgs/img-logo.svg'
                                }
                                alt="KT로고"
                                className="w-24"
                            />
                        </Link>
                    </div>
                    <div className="flex items-end">
                        <ul className="flex gap-14 items-end text-[15px]" style={{ borderBottom: isExpanded ? '1px solid #D1D5DB' : ''}}>
                            {/* 각 메뉴 항목 */}
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">
                                    kt wiz
                                </div>
                                <ul
                                    className="absolute left-0 w-20 mt-2 space-y-2 transition-opacity duration-500 ease-in-out top-full"
                                    style={{
                                        opacity: isExpanded ? 1 : 0,
                                        display: isExpanded ? 'inline-block' : 'none',
                                    }}
                                >
                                    <li>
                                        <Link to="/ktwiz/about">KT Wiz는?</Link>
                                    </li>
                                    <li>
                                        <Link to="/ktwiz/bi/symbol">구단 BI</Link>
                                    </li>
                                    <li>
                                        <Link to="/ktwiz/policy/regular">회원 정책</Link>
                                    </li>
                                    <li>
                                        <Link to="/ktwiz/sponsor">스폰서</Link>
                                    </li>
                                    <li>
                                        <Link to="/ktwiz/wallpaper">월페이퍼</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* 다른 메뉴 항목들 */}
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">
                                    wiz park
                                </div>
                                <ul
                                    className="absolute left-0 mt-2 space-y-2 transition-opacity duration-500 ease-in-out top-full w-36"
                                    style={{
                                        opacity: isExpanded ? 1 : 0,
                                        display: isExpanded ? 'inline-block' : 'none',
                                    }}
                                >
                                    <li>
                                        <Link to="/wizpark/intro">수원 kt wiz<br/>park</Link>
                                    </li>
                                    <li>
                                        <Link to="/wizpark/parking">주차 예약</Link>
                                    </li>
                                    <li>
                                        <Link to="/wizpark/location">찾아 오기</Link>
                                    </li>
                                    <li>
                                        <Link to="/wizpark/iksan">익산야구장</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Game 메뉴 */}
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">
                                    Game
                                </div>
                                <ul
                                    className="absolute left-0 w-20 mt-2 space-y-2 transition-opacity duration-500 ease-in-out top-full"
                                    style={{
                                        opacity: isExpanded ? 1 : 0,
                                        display: isExpanded ? 'inline-block' : 'none',
                                    }}
                                >
                                    <li>
                                        <Link to="/game/regular/schedule">정규리그</Link>
                                    </li>
                                    <li>
                                        <Link to="/game/futures/schedule">퓨처스리그</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Player 메뉴 */}
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">
                                    Player
                                </div>
                                <ul
                                    className="absolute left-0 w-20 mt-2 space-y-2 transition-opacity duration-500 ease-in-out top-full"
                                    style={{
                                        opacity: isExpanded ? 1 : 0,
                                        display: isExpanded ? 'inline-block' : 'none',
                                    }}
                                >
                                    <li>
                                        <Link to="/player/coach">코칭스텝</Link>
                                    </li>
                                    <li>
                                        <Link to="/player/pitcher">투수</Link>
                                    </li>
                                    <li>
                                        <Link to="/player/catcher">타자</Link>
                                    </li>
                                    <li>
                                        <Link to="/player/cheer">응원단</Link>
                                    </li>
                                    <li>
                                        <Link to="/player/song">응원가</Link>
                                    </li>
                                    <li>
                                        <Link to="/player/song-copyright">응원가 저작권</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Media 메뉴 */}
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">
                                    Media
                                </div>
                                <ul
                                    className="absolute left-0 w-20 mt-2 space-y-2 transition-opacity duration-500 ease-in-out top-full"
                                    style={{
                                        opacity: isExpanded ? 1 : 0,
                                        display: isExpanded ? 'inline-block' : 'none',
                                    }}
                                >
                                    <li>
                                        <Link to="/media/wiznews">wiz 뉴스</Link>
                                    </li>
                                    <li>
                                        <Link to="/media/wizstory">wiz 스토리</Link>
                                    </li>
                                    <li>
                                        <Link to="/media/firstpitch">시구자 정보</Link>
                                    </li>
                                    <li>
                                        <Link to="/media/wizphoto">wiz 포토</Link>
                                    </li>
                                    <li>
                                        <Link to="/media/photos/1">하이라이트</Link>
                                    </li>
                                    <li>
                                        <Link to="/media/live/pts">Live 영상모음</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Shop 메뉴 */}
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">
                                    Shop
                                </div>
                            </li>
                            {/* 스폰서 메뉴 */}
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">
                                    스폰서
                                </div>
                            </li>
                            {/* 티켓 구매 메뉴 */}
                            <li className="relative">
                                <div className="border-b-2 border-transparent hover:border-red-500">
                                    티켓 구매
                                </div>
                                <ul
                                    className="absolute left-0 mt-2 space-y-2 transition-opacity duration-500 ease-in-out top-full w-28"
                                    style={{
                                        opacity: isExpanded ? 1 : 0,
                                        display: isExpanded ? 'inline-block' : 'none',
                                    }}
                                >
                                    <li>
                                        <Link to="/ticket/reservation">티켓예매</Link>
                                    </li>
                                    <li>
                                        <Link to="/ticket/group">단체관람</Link>
                                    </li>
                                    <li>
                                        <Link to="/ticket/seatmap">입장 및 좌석 정보</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-end">
                        <ul
                            className="flex md:gap-3 md:text-[14px]"
                            style={{ color: isExpanded ? '#8a8b8e' : '#fff' }}
                        >
                            <li>
                                <Link to="/login">로그인</Link>
                            </li>
                            <li>
                                <Link to="/join/step">회원가입</Link>
                            </li>
                            <li>
                                <Link to="http://kt-sports.co.kr/sports/site/main.do">
                                    <img
                                        src={
                                            isBlack
                                                ? 'https://www.ktwiz.co.kr/v2/imgs/img-logo-ktsports-bk@2x.png'
                                                : 'https://www.ktwiz.co.kr/v2/imgs/img-logo-ktsports@2x.png'
                                        }
                                        alt="kt로고"
                                        className="w-10 md:w-14"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </>
    );
};

export default PlayerNavbar;
