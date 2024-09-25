import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/slide.css';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';


const Slide = () => {

  SwiperCore.use([Navigation]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.activeIndex);
  }

  
  const pictures = [
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152805.f3f-ce4d7badd32b.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152805.57e-cc219a285131.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152805.297-35c85cac40af.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152805.574-4c1006b7d85e.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152732.ec6-01568aaf8284.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152732.e8a-42360ac72414.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152732.5be-0eac527a582b.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152732.57d-36a60ece9b40.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152732.2a5-e4d5232081a7.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152732.682-73226d63891a.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152732.e94-30d7e48e04d4.jpg",
    "https://wizzap.ktwiz.co.kr/files/article/2024/09/07/20240907152732.81b-ff5fdaa700b1.jpg",
];


  return (
    <div className='relative w-full slide-container'>
      <Swiper
        onSlideChange={handleSlideChange}
        centeredSlides={true}
        slidesPerView='auto'
        spaceBetween={10}
        slidesPerGroup={1}
        speed={300}
        navigation={{
          nextEl: '.swiper-button-next', //커스텀 '다음' 버튼
          prevEl: '.swiper-button-prev' //커스텀 '이전' 버튼
        }}
      >
        {pictures.map((picture, index) => (
            <SwiperSlide key={index}>
                <div
                  className={`image-container ${
                    activeIndex === index ? 'active' : 'masked'
                  }`}
                >
                    <img src={picture} />
                </div>
            </SwiperSlide>
        ))}

        
      </Swiper>  
      
      <div className='flex items-center justify-center'>
        <div className='z-20 flex w-[1100px] items-center gap-[1000px]'> 
            <div className='swiper-button-prev w-[54px] h-[54px] cursor-pointer'>
              <img src="https://www.ktwiz.co.kr/v2/imgs/ico-54-gallery-prev@2x.png" alt="Prev" />
            </div>
            <div className='swiper-button-next w-[54px] h-[54px] cursor-pointer'>
              <img src="https://www.ktwiz.co.kr/v2/imgs/ico-54-gallery-next@2x.png" alt="Next" />
            </div>
        </div>

        
        <div className='controller'>
          <button className="-ml-[711.5px] z-30 cursor-pointer w-[320px] h-[48px] px-8 py-2 text-[14px] font-extrabold text-center text-black border border-black rounded-lg hover:bg-gray-100">더 많은 사진보기</button>  
        </div>   
      </div>  

    </div>
  );
};


export default Slide;
