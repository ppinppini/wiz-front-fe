const ParkingCard = () => {
  return (
    <div
      className="relative h-full bg-[url('https://www.ktwiz.co.kr/v2/imgs/dummy/main/img-banner-parking@2x.png')] bg-cover bg-center rounded-lg p-6 shadow-lg flex justify-between items-center"
      aria-label="Parking background image"
    >
      <div className="flex flex-col space-y-2 bg-white bg-opacity-70 p-4 rounded-lg">
        <span className="text-red-600 text-xl">수원 케이티 위즈 파크</span>
        <span className="text-2xl font-bold">사전 주차 예약제 안내</span>
        <a href="#" className="text-blue-500 underline">
          사전주차 예약하기 →
        </a>
      </div>
    </div>
  );
};

export default ParkingCard;
