import StatusArea from '../../../components/player/StatusArea';
import PlayerCarousel from '../../../components/player/PlayerCarousel';
import PitersInfo from '../../../components/player/PitersInfo';

const Pitchersdetail = () => {
  return (
    <div className="bg-black min-h-screen p-4">

      {/* 플레이어 기본정보와 이미지 */}
      <div className="mx-auto text-white">
        <PitersInfo />
      </div>

      {/* 2024시즌 기록 */}
      <div className="mx-auto text-white">
        <StatusArea />
      </div>

      {/* 다른 플레이어 캐러셀 */}
      <div className="mx-auto text-white">
        <PlayerCarousel />
      </div>

    </div>
  );
};

export default Pitchersdetail;
