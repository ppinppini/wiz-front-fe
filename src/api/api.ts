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
  // 메인 페이지 하단의 '이달의 선수' api
  getPlayerOfTheMonth: async () => {
    const data = await apiFetch("/media/monthlyPlayer");
    return data;
  },
};
