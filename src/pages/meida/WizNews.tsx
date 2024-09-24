import { useState, useEffect, useCallback } from "react";
//import TopBanner from "../../components/TopBanner";
import PageLocator from "../../components/PageLocator";
import { NewsList, NewsDetail } from "../../types/types";
import SearchBar from "../../components/media/SearchBar";
import NewsCard from "../../components/media/NewsCard";
import Pagination from "../../components/media/Pagination";
import { api } from "../../api/api";
import NewsDetailModal from "./NewsDetailModal";
import TabMenuBar from "../../components/TabMenuBar";
import TabMenuNavbar from "../../components/TabMenuNavbar";

const WizNews = () => {
  const [isSticky, setIsSticky] = useState(false);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [news, setNews] = useState<NewsList[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);

  const [selectedArticle, setSelectedArticle] = useState<NewsDetail | null>(
    null
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = async (artcSeq: number) => {
    const response = await api.getNewsDetail(artcSeq);

    setSelectedArticle(response);
    setModalOpen(true);
  };

  const fetchNews = useCallback(async () => {
    const data = await api.getNewsList(searchTerm, 9, currentPage);
    setNews(data.list);
    setTotalPages(Math.ceil(data.searchCount / 9));
  }, [searchTerm, currentPage]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 630) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setHasAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 클린업 함수에서 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mediaTabs = [
    { title: "wiz 소식", route: "/media/wiznews" },
    { title: "wiz 보도자료", route: "/media/wizpress" },
  ];
  return (
    <div className="flex flex-col items-center bg-black ">
      {/* 메인 컨텐츠 컨테이너 */}
      <div className="w-[1100px] h-[1590.5px] mx-[25.1em] pt-[4.625em] relative">
        {/* 페이지 로케이터 */}
        <PageLocator pagePath="> MEDIA >" currentPage="wiz 뉴스" />{" "}
        {/* 탭 구현 */}
        <div className="mt-[40px]">
          <TabMenuBar tabs={mediaTabs} />
        </div>
        {isSticky && (
          <div
            className={`fixed top-0 left-0 z-50 w-full ${!hasAnimated ? "animate-diagonal-slide" : ""}`}
            onAnimationEnd={() => setHasAnimated(true)}
          >
            <TabMenuNavbar menuItems={mediaTabs} />
          </div>
        )}
        {/* 검색 컴포넌트 */}
        <SearchBar onSearch={handleSearch} />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((item) => (
            <NewsCard key={item.artcSeq} article={item} />
          ))}
        </div> */}
        {/* 뉴스 카드 리스트 컴포넌트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((item) => (
            <div
              key={item.artcSeq}
              onClick={() => openModal(item.artcSeq)}
              className="cursor-pointer"
            >
              <NewsCard article={item} />
            </div>
          ))}
        </div>
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

export default WizNews;
