interface RankProps {
  rank: number;
  game: number;
  wldName: string;
  wra: string;
}

const GameRankCard = ({ rank, game, wldName, wra }: RankProps) => {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-xl p-4 text-white flex items-center justify-between h-full shadow-lg">
      <div>
        <div className="text-3xl font-bold mb-1">{rank}위</div>
        <div className="text-lg font-semibold mb-1">{wldName}</div>
        <div className="text-sm">
          총 {game}경기, 승률 {wra}
        </div>
      </div>
      <div>
        <img
          src="https://www.ktwiz.co.kr/v2/imgs/img-score@2x.png"
          alt="team image"
          className="w-32 h-32"
        />
      </div>
    </div>
  );
};
export default GameRankCard;
