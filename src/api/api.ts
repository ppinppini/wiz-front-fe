const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const api = {
    getRecentGame: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/game/recentGames`);
            if (!response.ok) {
                throw new Error('데이터를 불러오는데 실패했습니다.');
            }
            const responseData = await response.json();
            return responseData.data;
        } catch (error) {
            if (error instanceof Error) {
              throw new Error(error.message);
            } else {
              throw new Error('알 수 없는 에러 발생');
            }
        }
    },
};