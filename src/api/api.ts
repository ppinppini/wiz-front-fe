//메인페이지의 '최근소식'을 불러오는 api
export const recentNewsFetcher = async () => {
    const response = await fetch("http://43.201.249.197/api/media/hotissue?count=10");
    return response.json();
};
// 메인페이지의 '하이라이트 영상' 을 불러오는 api
export const highlightsVideoFetcher = async () => {
    const response = await fetch("http://43.201.249.197/api/media/highlightlist?count=10");
    return response.json();
};
