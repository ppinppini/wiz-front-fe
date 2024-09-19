import { NewsListResponse, NewsDetailResponse } from "../types/types";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function apiFetch(endpoint: string) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(
        `Error: ${response.statusText} (HTTP ${response.status})`
      );
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API 요청 중 오류 발생: ${error.message}`);
    } else {
      throw new Error("알 수 없는 오류가 발생했습니다.");
    }
  }
}
async function apiFetchType<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(
        `Error: ${response.statusText} (HTTP ${response.status})`
      );
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API 요청 중 오류 발생: ${error.message}`);
    } else {
      throw new Error("알 수 없는 오류가 발생했습니다.");
    }
  }
}

export const api = {
  getRecentGame: async () => {
    const data = await apiFetch("/game/recentGames");
    return data.data;
  },
  getHighlightVideo: async () => {
    const data = await apiFetch("/media/highlightVideo");
    return data;
  },
  recentNewsFetcher: async () => {
    const data = await apiFetch("/media/hotissue?count=10");
    return data;
  },
  // 메인페이지의 '하이라이트 영상' 을 불러오는 api
  highlightsVideoFetcher: async () => {
    const data = await apiFetch("/media/highlightlist?count=10");
    return data;
  },
  //메인 페이지의 팀 순위 api
  getGameRank: async () => {
    const data = await apiFetch("/game/ktwizteamrank");
    return data.data.ktWizTeamRank;
  },
  // 뉴스 리스트 api
  getNewsList: async (
    searchWord = "",
    itemCount = 5,
    pageNum = 1
  ): Promise<NewsListResponse> => {
    const endpoint = `/article/newslistpage?searchWord=${searchWord}&itemCount=${itemCount}&pageNum=${pageNum}`;
    return apiFetchType<NewsListResponse>(endpoint);
  },
  fetchNewsDetail: async (artcSeq: number): Promise<NewsDetailResponse> => {
    const endpoint = `/article/newsdetail?artcSeq=${artcSeq}`;
    return apiFetchType<NewsDetailResponse>(endpoint);
  },
  // 메인 페이지 하단의 '이달의 선수' api
  getPlayerOfTheMonth: async () => {
    const data = await apiFetch("/media/monthlyPlayer");
    return data;
  },

  //Player 코칭스탭 페이지의 이미지를 불러오는 api
  getPlayerCoachImage: async () => {
    const data = await apiFetch("/player/coachlist");
    return data.data.list; 
  },
  getPlayerPitcherImage: async () => {
    const data = await apiFetch("/player/pitcherlist");
    return data; 
  },  
  // 정규리그 페이지 시즌 팀 순위 api
  getGameSeasonTeamRank: async () => {
    const data = await apiFetch("/game/rank/periodteamrank");
    return data.data.list;
  },
  // 정규리그 페이지 시즌 팀 기록 api
  getGameSeasonTeamRecord: async () => {
    const data = await apiFetch("/game/teamrankbyyear");
    return data.data.list;
  },
  // 정규리그 페이지 시즌 팀 투수 순위 api
  getGameSeasonTeamPitcherRank: async () => {
    const data = await apiFetch("/game/rank/pitching");
    return data.data.list;
  },
  // 정규리그 페이지 시즌 팀 타자 순위 api
  getGameSeasonTeamBatterRank: async () => {
    const data = await apiFetch("/game/rank/batting");
    return data.data.list;
  },
  // 정규리그 페이지 시즌 팀 상대 전적 api
  getGameSeasonTeamvsRank: async () => {
    const data = await apiFetch("/game/rank/teamvs");
    return data.data.list;
  },
  // 정규리그 페이지 투수 평균 자책점 TOP3 api
  getGamePitcherEraTop3: async () => {
    const data = await apiFetch("/game/rank/pitcher/era/top3");
    return data.data.list;
  },
  // 정규리그 페이지 투수 승리 TOP3 api
  getGamePitcherWinTop3: async () => {
    const data = await apiFetch("/game/rank/pitcher/win/top3");
    return data.data.list;
  },
  // 정규리그 페이지 전체 투수 평균자책점 TOP5 api
  getGameAllPitcherEraTop5: async () => {
    const data = await apiFetch("/game/rank/pitcher/total/top5");
    return data.data.list;
  },
  // 정규리그 페이지 타자 타율 TOP3 api
  getGameBatterHraTop3: async () => {
    const data = await apiFetch("/game/rank/batter/hra/top3");
    return data.data.list;
  },
  // 정규리그 페이지 타자 홈런 TOP3 api
  getGameBatterHrTop3: async () => {
    const data = await apiFetch("/game/rank/batter/hr/top3");
    return data.data.list;
  },
  // 정규리그 페이지 전체 타자 타율 TOP5 api
  getGameAllBatterHraTop5: async () => {
    const data = await apiFetch("/game/rank/batter/total/top5");
    return data.data.list;
  },
  // 정규리그 페이지 2024시즌 관중현황 api
  getGameCrowdStatus: async () => {
    const data = await apiFetch("/game/rank/crowd?gyear=2024");
    return data.data.list;
  },
  // 정규리그 페이지 순위기록 탭 투수기록 테이블 api
  getGamePitcherRecordRanking: async () => {
    const data = await apiFetch(
      "/game/rank/kt/pitcher?gyear=2024&pname=&sortKey=ERA"
    );
    return data.data.list;
  },
  // 정규리그 페이지 순위기록 탭 타자기록 테이블 api
  getGameBatterRecordRanking: async () => {
    const data = await apiFetch(
      "/game/rank/kt/batter?gyear=2024&pname=&sortKey=ERA"
    );
    return data.data.list;
  },
  // 정규리그 페이지의 '경기 일정'탭의 '월 스케줄' 데이터를 요청하는 코드
  monthSceduleFetcher: async (yearMonth:string) => {
      const response = await apiFetch(`/game/monthschedule?yearMonth=${yearMonth}`);
      return response.json();
  },
  // 정규리그 페이지의 '경기 일정'탭의 '모든 팀월 스케줄' 데이터를 요청하는 코드
  allGameScheduleFetcher: async (yearMonth:string) => {
      const response = await apiFetch(`/game/allgameschedule?yearMonth=${yearMonth}`);
      return response.json();
  },

  // 정규리그 페이지의 '박스스코어' 데이터를 요청하는 코드
  boxScoreFetcher: async (gameDate: string, gmKey: string) => {
      const response = await apiFetch(`/game/boxscore?gameDate=${gameDate}&gmkey=${gmKey}`);
      return response.json();

  },
};
