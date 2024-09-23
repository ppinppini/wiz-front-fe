import React from "react";
import { TGameBatterRank, TGamePitcherRank } from "../../types/types";
import Ribon from "./Ribon";
import PlayerAvatarSkeleton from "../skeleton/PlayerAvatarSkeleton";
import RectSkeleton from "../skeleton/RectSkeleton";

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
  // loading status
  loading: boolean;
}> = ({
  playerDataType,
  eraTop3,
  winTop3,
  eraTop5,
  hraTop3,
  hrTop3,
  hraTop5,
  loading,
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
                    <div className="relative">
                      <Ribon innerText={"평균자책점"} />
                      <img src={eraTop3?.[0]?.playerPrvwImg} alt="선수이미지" />
                    </div>
                  ) : (
                    <PlayerAvatarSkeleton width="180" height="180" />
                  )}
                </div>
                {/* EAR TOP3 PITCHERS */}
                <ul className="flex flex-col ml-[20px] justify-center">
                  {loading ? (
                    <>
                      <li className="py-[12px]">
                        <RectSkeleton width="140" height="20" />
                      </li>
                      <li className="py-[12px]">
                        <RectSkeleton width="110" height="20" />
                      </li>
                      <li className="py-[12px]">
                        <RectSkeleton width="110" height="20" />
                      </li>
                    </>
                  ) : (
                    eraTop3!.map((player, index) =>
                      index === 0 ? (
                        <li key={index} className="text-lg font-bold py-[12px]">
                          {index + 1}. {player.playerName} ({player.era})
                        </li>
                      ) : (
                        <li key={index} className="text-base py-[12px]">
                          {index + 1}. {player.playerName} ({player.era})
                        </li>
                      )
                    )
                  )}
                </ul>
              </li>
              <li className="w-1/2 h-[185px] flex">
                {/* WIN TOP3 */}
                <div className="w-[180px] h-full">
                  {/* WIN 1ST PLAYER IMG */}
                  {winTop3?.[0]?.playerPrvwImg ? (
                    <div className="relative">
                      <Ribon innerText={"승리"} />
                      <img src={winTop3?.[0]?.playerPrvwImg} />
                    </div>
                  ) : (
                    <PlayerAvatarSkeleton width="180" height="180" />
                  )}
                </div>
                {/* EAR TOP3 PITCHERS */}
                <ul className="flex flex-col ml-[20px] justify-center">
                  {loading ? (
                    <>
                      <li className="py-[12px]">
                        <RectSkeleton width="140" height="20" />
                      </li>
                      <li className="py-[12px]">
                        <RectSkeleton width="110" height="20" />
                      </li>
                      <li className="py-[12px]">
                        <RectSkeleton width="110" height="20" />
                      </li>
                    </>
                  ) : (
                    winTop3!.map((player, index) =>
                      index === 0 ? (
                        <li key={index} className="text-lg font-bold py-[12px]">
                          {index + 1}. {player.playerName} ({player.w})
                        </li>
                      ) : (
                        <li key={index} className="text-base py-[12px]">
                          {index + 1}. {player.playerName} ({player.w})
                        </li>
                      )
                    )
                  )}
                </ul>
              </li>
            </ul>
          </div>

          {/* PITCHER TOP5 PART */}
          <div className="w-[25%] mt-[20px] ml-[30px] inline-block">
            {loading ? (
              <>
                <h5 className="text-lg font-bold text-white">
                  <RectSkeleton width="267" height="28" />
                </h5>
                <div className="mt-[12px] text-white">
                  <RectSkeleton width="267" height="160" />
                </div>
                <div className="mt-[8px] flex justify-end">
                  <RectSkeleton width="160" height="22.5" />
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
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
                    <div className="relative">
                      <Ribon innerText={"타율"} />
                      <img src={hraTop3?.[0]?.playerPrvwImg} />
                    </div>
                  ) : (
                    <PlayerAvatarSkeleton width="180" height="180" />
                  )}
                </div>
                {/* HRA TOP3 BATTERS */}
                <ul className="flex flex-col ml-[20px] justify-center">
                  {loading ? (
                    <>
                      <li className="py-[12px]">
                        <RectSkeleton width="140" height="25" />
                      </li>
                      <li className="py-[12px]">
                        <RectSkeleton width="110" height="25" />
                      </li>
                      <li className="py-[12px]">
                        <RectSkeleton width="110" height="25" />
                      </li>
                    </>
                  ) : (
                    hraTop3!.map((player, index) =>
                      index === 0 ? (
                        <li key={index} className="text-lg font-bold py-[12px]">
                          {index + 1}. {player.playerName} ({player.hra})
                        </li>
                      ) : (
                        <li key={index} className="text-base py-[12px]">
                          {index + 1}. {player.playerName} ({player.hra})
                        </li>
                      )
                    )
                  )}
                </ul>
              </li>
              <li className="w-1/2 h-[185px] flex">
                {/* HR TOP3 */}
                <div className="w-[180px] h-full">
                  {/* HR 1ST PLAYER IMG */}
                  {hrTop3?.[0]?.playerPrvwImg ? (
                    <div className="relative">
                      <Ribon innerText={"홈런"} />
                      <img src={hrTop3?.[0]?.playerPrvwImg} />
                    </div>
                  ) : (
                    <PlayerAvatarSkeleton width="180" height="180" />
                  )}
                </div>
                {/* HR TOP3 BATTERS */}
                <ul className="flex flex-col ml-[20px] justify-center">
                  {loading ? (
                    <>
                      <li className="py-[12px]">
                        <RectSkeleton width="140" height="25" />
                      </li>
                      <li className="py-[12px]">
                        <RectSkeleton width="110" height="25" />
                      </li>
                      <li className="py-[12px]">
                        <RectSkeleton width="110" height="25" />
                      </li>
                    </>
                  ) : (
                    hrTop3!.map((player, index) =>
                      index === 0 ? (
                        <li key={index} className="text-lg font-bold py-[12px]">
                          {index + 1}. {player.playerName} ({player.hr})
                        </li>
                      ) : (
                        <li key={index} className="text-base py-[12px]">
                          {index + 1}. {player.playerName} ({player.hr})
                        </li>
                      )
                    )
                  )}
                </ul>
              </li>
            </ul>
          </div>

          {/* BATTER TOP5 PART */}
          <div className="w-[25%] mt-[20px] ml-[30px] inline-block">
            {loading ? (
              <>
                <h5 className="text-lg font-bold text-white">
                  <RectSkeleton width="267" height="28" />
                </h5>
                <div className="mt-[12px] text-white">
                  <RectSkeleton width="267" height="160" />
                </div>
                <div className="mt-[8px] flex justify-end">
                  <RectSkeleton width="160" height="22.5" />
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </article>
      )}
    </>
  );
};
export default GamePlayerRankingTop;
