import { useState, useEffect, useCallback } from "react";
import TopBanner from "../../components/TopBanner";
import PageLocator from "../../components/PageLocator";
import Tab from "../../components/Tab";
import { NewsList as newsListType, NewsDetail } from "../../types/types";
import SearchBar from "../../components/media/SearchBar";
//import NewsCard from "../../components/media/NewsCard";
import Pagination from "../../components/media/Pagination";
import { api } from "../../api/api";
import NewsDetailModal from "./NewsDetailModal";
import NewsList from "../../components/media/NewsList";

const WizPress = () => {
  const [news, setNews] = useState<newsListType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);

  const [selectedArticle, setSelectedArticle] = useState<NewsDetail | null>(
    null
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = async (artcSeq: number) => {
    const response = await api.getPressDetail(artcSeq);

    setSelectedArticle(response);
    setModalOpen(true);
  };

  const fetchNews = useCallback(async () => {
    const data = await api.getPressList(searchTerm, 10, currentPage);
    setNews(data);
    setTotalPages(Math.ceil(data.searchCount / 10));
  }, [searchTerm, currentPage]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const mediaTabs = [
    { title: "wiz 소식", route: "/media/wiznews" },
    { title: "wiz 보도자료", route: "/media/wizpress" },
  ];
  return (
    <div className="flex flex-col items-center">
      {/* 상단 배너 */}
      <TopBanner />

      {/* 탭 구현 */}
      <Tab tabs={mediaTabs} />

      {/* 메인 컨텐츠 컨테이너 */}
      <div className="w-[1100px] h-[1590.5px] mx-[25.1em] pt-[4.625em] relative">
        {/* 페이지 로케이터 */}
        <PageLocator pagePath="> MEDIA >" currentPage="wiz 보도자료" />

        {/* 검색 컴포넌트 */}
        <SearchBar onSearch={handleSearch} />

        {/* 뉴스 리스트 컴포넌트 */}
        <NewsList news={news} onSelectArticle={openModal} />
        {/* 뉴스 상세 모달 */}
        {selectedArticle && (
          <NewsDetailModal
            article={selectedArticle}
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}

        {/* 페이지네이션 */}
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
      </div>

      {/* 푸터 */}
    </div>
  );
};

export default WizPress;
