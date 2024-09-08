const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const api = {
    getRecentGame: () => {
        return fetch(`${API_BASE_URL}/game/recentGames`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((result) => result.data)
            .catch((error) => {
                throw new Error(error.message);
            });
    }   
}