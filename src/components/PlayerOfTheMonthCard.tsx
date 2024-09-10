import { api } from '../api/api';
import ktLogo from '../assets/ktLogo.svg'
import { useEffect, useState } from 'react';

const PlayerOfTheMonthCard = () => {
    //이달의 선수 api
    const [player, setPlayer]=useState({
        num: '',
        name: '',
        imgFilePath:''
    })

    //async-await
    useEffect(()=>{
        const fetchPlayerData = async()=>{
            try {
                // API 호출
                const data = await api.getPlayerOfTheMonth();
                //console.log(data);
                setPlayer({
                    num: data.num, //선수 번호
                    name: data.name, //선수 이름
                    imgFilePath: data.imgFilePath //선수이미지
                });
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        };
    fetchPlayerData();
}, []);


    return (
        <div
        className="relative w-[540px] h-[309px] border border-gray-200 rounded-[20px] overflow-hidden shadow-md m-4"
        style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.55), transparent 31%, transparent), url(${player.imgFilePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} 
        >

        <div className="relative z-10 text-white top-[72px] left-[47px]">
            <div className="flex items-center mb-[34px]">
            <img src={ktLogo} alt="kt wiz 로고" className="w-[81px] h-[38px] inline-block" />
            <h2 className="inline-block text-white font-light text-[15px] mt-[25px]">이달의 선수</h2>
            </div>
            
            <p className=" text-[53px] font-normal text-[#f53232] leading-none">{player.num}</p> {/*p요소는 자체적인 높이가 있어서 leading-none으로 줄높이 제거*/}
            <p className=" text-[53px] font-normal leading-none">{player.name}</p>
        </div>

        </div>
);
}
export default PlayerOfTheMonthCard