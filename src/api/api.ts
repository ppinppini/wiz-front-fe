const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = {
    getRecentGame: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/game/recentGames`);
            if (!response.ok) {
                throw new Error("데이터를 불러오는데 실패했습니다.");
            }
            const responseData = await response.json();
            return responseData.data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("알 수 없는 에러 발생");
            }
        }
    },
    getHighlightVideo: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/media/highlightVideo`);
            if (!response.ok) {
                throw new Error("데이터를 불러오는데 실패했습니다.");
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("알 수 없는 에러 발생");
            }
        }
    },
    recentNewsFetcher: async () => {
        const response = await fetch(`${API_BASE_URL}/media/hotissue?count=10`);
        return response.json();
    },
    // 메인페이지의 '하이라이트 영상' 을 불러오는 api
    highlightsVideoFetcher: async () => {
        const response = await fetch(`${API_BASE_URL}/media/highlightlist?count=10`);
        return response.json();
    },
    // 정규리그 페이지의 '경기 일정'탭의 '월 스케줄' 데이터를 요청하는 코드
    monthSceduleFetcher: async () => {
        const response = await fetch(`${API_BASE_URL}/game/monthschedule?yearMonth=202409`);
        return response.json();
    },
    // 정규리그 페이지의 '경기 일정'탭의 '모든 팀월 스케줄' 데이터를 요청하는 코드
    allGameScheduleFetcher: async () => {
        const response = await fetch(`${API_BASE_URL}/game/allgameschedule?yearMonth=202409`);
        return response.json();
    },

    // 정규리그 페이지의 '박스스코어' 데이터를 요청하는 코드
    boxScoreFetcher: async (gameDate: string, gmKey: string) => {
        const response = await fetch(`${API_BASE_URL}/game/boxscore?gameDate=${gameDate}&gmkey=${gmKey}`);
        return response.json();
    },
};
