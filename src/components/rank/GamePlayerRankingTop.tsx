import { TGameBatterRank, TGamePitcherRank } from "../../types/types";

const GamePlayerRankingTop: React.FC<{
  // player type data
  playerDataType: string;
  // pitcher rank data
  eraTop3?: TGamePitcherRank;
  winTop3?: TGamePitcherRank;
  eraTop5?: TGamePitcherRank;
  // batter rank data
  hraTop3?: TGameBatterRank;
  hrTop3?: TGameBatterRank;
  hraTop5?: TGameBatterRank;
}> = ({
  playerDataType,
  eraTop3,
  winTop3,
  eraTop5,
  hraTop3,
  hrTop3,
  hraTop5,
}) => {
  return (
    <>
      {playerDataType === "pitcher" ? (
        <article className="w-[1100px] h-[247px] mt-[40px] flex flex-row">
          {/* PITCHER TOP3 CARD */}
          <div className="w-[75%] py-[30px] px-[35px] border-[1px] border-[#E4E4E4] justify-between bg-black text-white">
            <ul className="flex flex-row">
              <li className="w-1/2 h-[185px] mr-[30px] flex">
                {/* ERA TOP3 */}
                <div className="w-[180px] h-full flex flex-row">
                  {/* ERA 1ST PITCHER IMG */}
                  {eraTop3?.[0]?.playerPrvwImg ? (
                    <img src={eraTop3?.[0]?.playerPrvwImg} />
                  ) : (
                    <div>no player image</div>
                  )}
                </div>
                {/* EAR TOP3 PITCHERS */}
                <ul className="flex flex-col ml-[20px] justify-center">
                  {eraTop3!.map((player, index) =>
                    index === 0 ? (
                      <li key={index} className="text-lg font-bold py-[12px]">
                        {index + 1}. {player.playerName} ({player.era})
                      </li>
                    ) : (
                      <li key={index} className="text-base py-[12px]">
                        {index + 1}. {player.playerName} ({player.era})
                      </li>
                    )
                  )}
                </ul>
              </li>
              <li className="w-1/2 h-[185px] flex">
                {/* WIN TOP3 */}
                <div className="w-[180px] h-full">
                  {/* WIN 1ST PLAYER IMG */}
                  {winTop3?.[0]?.playerPrvwImg ? (
                    <img src={winTop3?.[0]?.playerPrvwImg} />
                  ) : (
                    <span>no player image</span>
                  )}
                </div>
                {/* EAR TOP3 PITCHERS */}
                <ul className="flex flex-col ml-[20px] justify-center">
                  {winTop3!.map((player, index) =>
                    index === 0 ? (
                      <li key={index} className="text-lg font-bold py-[12px]">
                        {index + 1}. {player.playerName} ({player.w})
                      </li>
                    ) : (
                      <li key={index} className="text-base py-[12px]">
                        {index + 1}. {player.playerName} ({player.w})
                      </li>
                    )
                  )}
                </ul>
              </li>
            </ul>
          </div>

          {/* PITCHER TOP5 PART */}
          <div className="w-[25%] mt-[20px] ml-[30px] inline-block">
            <h5 className="text-lg font-bold text-white">
              전체 투수 평균자책점
              <span className="ml-2 text-[#ec0a0b]">TOP5</span>
            </h5>
            <ul className="mt-[12px] text-white">
              {eraTop5!.map((player, index) => (
                <li className="h-[32px] py-[8px] px-[5px] border-b-[1px]">
                  <span>
                    {index + 1}. {player.playerName} ({player.teamName})
                  </span>
                  <span className="float-right">{player.era}</span>
                </li>
              ))}
            </ul>
            <span className="block text-right mt-[8px] text-[#44444] text-[15px] text-white">
              ※ 2024 정규리그 시즌
            </span>
          </div>
        </article>
      ) : (
        <article className="w-[1100px] h-[247px] mt-[40px] flex flex-row">
          {/* BATTER TOP3 CARD */}
          <div className="w-[75%] py-[30px] px-[35px] border-[1px] border-[#E4E4E4] justify-between bg-black text-white">
            <ul className="flex flex-row">
              <li className="w-1/2 h-[185px] mr-[30px] flex">
                {/* HRA TOP3 */}
                <div className="w-[180px] h-full flex flex-row">
                  {/* HRA 1ST PITCHER IMG */}
                  {hraTop3?.[0]?.playerPrvwImg ? (
                    <img src={hraTop3?.[0]?.playerPrvwImg} />
                  ) : (
                    <div>no player image</div>
                  )}
                </div>
                {/* HRA TOP3 BATTERS */}
                <ul className="flex flex-col ml-[20px] justify-center">
                  {hraTop3!.map((player, index) =>
                    index === 0 ? (
                      <li key={index} className="text-lg font-bold py-[12px]">
                        {index + 1}. {player.playerName} ({player.hra})
                      </li>
                    ) : (
                      <li key={index} className="text-base py-[12px]">
                        {index + 1}. {player.playerName} ({player.hra})
                      </li>
                    )
                  )}
                </ul>
              </li>
              <li className="w-1/2 h-[185px] flex">
                {/* HR TOP3 */}
                <div className="w-[180px] h-full">
                  {/* HR 1ST PLAYER IMG */}
                  {hrTop3?.[0]?.playerPrvwImg ? (
                    <img src={hrTop3?.[0]?.playerPrvwImg} />
                  ) : (
                    <span>no player image</span>
                  )}
                </div>
                {/* HR TOP3 BATTERS */}
                <ul className="flex flex-col ml-[20px] justify-center">
                  {hrTop3!.map((player, index) =>
                    index === 0 ? (
                      <li key={index} className="text-lg font-bold py-[12px]">
                        {index + 1}. {player.playerName} ({player.hr})
                      </li>
                    ) : (
                      <li key={index} className="text-base py-[12px]">
                        {index + 1}. {player.playerName} ({player.hr})
                      </li>
                    )
                  )}
                </ul>
              </li>
            </ul>
          </div>

          {/* BATTER TOP5 PART */}
          <div className="w-[25%] mt-[20px] ml-[30px] inline-block">
            <h5 className="text-lg font-bold text-white">
              전체 타자 타율
              <span className="ml-2 text-[#ec0a0b]">TOP5</span>
            </h5>
            <ul className="mt-[12px] text-white">
              {hraTop5!.map((player, index) => (
                <li className="h-[32px] py-[8px] px-[5px] border-b-[1px]">
                  <span>
                    {index + 1}. {player.playerName} ({player.teamName})
                  </span>
                  <span className="float-right">{player.hra}</span>
                </li>
              ))}
            </ul>
            <span className="block text-right mt-[8px] text-[#44444] text-[15px] text-white">
              ※ 2024 정규리그 시즌
            </span>
          </div>
        </article>
      )}
    </>
  );
};
export default GamePlayerRankingTop;
