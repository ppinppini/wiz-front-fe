import TopBannerBgImage from '../assets/top-banner-image.png'

const TopBanner = () => {
  return (
    <>
      <div
            style={{
                backgroundImage: `url(${TopBannerBgImage})`,
                backgroundSize: 'cover',
                backgroundColor: '#202020',
            }}
            className="w-full h-64 flex flex-col justify-center items-center" // TailwindCSS로 크기 지정
        >
            <h3>정규 리그</h3>
            <span>kt wiz의 정규리그 경기 일정을 알려 드립니다.</span>
        </div>
    </>
  );
}
export default TopBanner