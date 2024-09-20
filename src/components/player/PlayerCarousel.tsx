import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PlayerType {
  backnum: string;
  playerName: string;
  playerPrvwImg: string;
  pcode:string;
};

const PlayerCarousel = () => {
  
    const [playerData, setPlayerData] = useState<PlayerType[]>([]);
    const navigate =useNavigate();
    
    useEffect(() => {
        const fetchPlayerData = async () => {
        try {
            const response = await fetch('http://3.35.51.214/api/player/pitcherlist');
            const result = await response.json();
            const players = result.map((player: any) => ({
            backnum: player.backnum,
            playerName: player.playerName,
            playerPrvwImg: player.playerPrvwImg,
            pcode:player.pcode,
            }));
            setPlayerData(players);
        } catch (error) {
            console.error('Error fetching player data:', error);
        }
        };
        fetchPlayerData();
    }, []);

    return (
        <Swiper spaceBetween={10} slidesPerView={4} loop={true}>
        {playerData.map((player, index) => (
            <SwiperSlide key={index}>
            <div className="relative group text-center hover-blur" >
                <img
                src={player.playerPrvwImg}
                alt={player.playerName}
                className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 
                group-hover:opacity-100 backdrop-filter backdrop-blur-lg">
                {/* <button
                    onClick={() => window.location.href = `/player/pitcher/details/${pcode}`}
                    className="text-white border border-white py-2 px-4 rounded-lg cursor-pointer"
                    >
                    프로필
                    </button> */}
                <button
                    onClick={()=>navigate(`/player/pitcher/details?pcode=${player.pcode}`)}
                    className="text-white border border-white py-2 px-4 rounded-lg cursor-pointer"
                    >
                    프로필
                    </button>
                </div>
                <div className="inline-block relative text-left pl-[90px]">
                <p className="absolute top-0 left-0 w-20 font-semibold text-[74px] text-gray-400 text-center tracking-tight leading-[74px] mr-4">
                    {player.backnum}
                </p>
                <p className="font-sans text-[20px] leading-[30px] pt-1">
                    {player.playerName}
                </p>
                </div>
            </div>
            </SwiperSlide>
        ))}

        {/* 목록버튼 */}
        <div className="text-center mt-8">
            <button
            className="text-white rounded-lg hover:bg-gray-600 transition h-13 leading-[52px] w-[200px] px-[52px] py-0 bg-transparent border border-[rgba(255,255,255,0.5)]"
            onClick={() => window.location.href = '/player/pitcher'}
            >
            목록
            </button>
        </div>
        
        </Swiper>

        
    );
};

export default PlayerCarousel;
