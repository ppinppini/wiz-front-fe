import ktwizOnlineStoreImg from '../assets/ktwizOnlineStoreImg.png'
import ktLogo from '../assets/ktLogo.svg'

const OnlineStoreCard = () => {
    return (
        <div
        className="relative w-[540px] h-[309px] border border-gray-200 rounded-[20px] overflow-hidden shadow-md m-4"
        style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.55), transparent 31%, transparent), url(${ktwizOnlineStoreImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} 
        >

        <div className="relative z-10 flex flex-col  h-full  text-white top-[72px] left-[47px]">
        <img src={ktLogo} alt="kt wiz 로고" className="w-[124px] h-[59px] mb-2" />
        <p className=" font-medium mb-[15px] text-[20px] leading-none">공식 온라인 스토어</p>
        <p className="text-sm text-[13px] text-white opacity-60 mb-[30px]">kt wiz의 익스클루시브한 아이템을 만나보세요!</p>
        
        <a href="https://www.ktwizstore.co.kr/" 
        target="_blank" rel="noopener noreferrer" /*새창으로 열리게 처리*/
        className="inline-block relative text-white text-[13px]">
            바로가기 &rarr;
        </a>
        </div>
        </div>
    );
    };
export default OnlineStoreCard