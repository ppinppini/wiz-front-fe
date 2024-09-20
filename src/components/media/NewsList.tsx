import { NewsList as NewsListType } from "../../types/types";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

interface NewsListProps {
  news: NewsListType[];
  onSelectArticle: (artcSeq: number) => void;
}

function NewsList({ news, onSelectArticle }: NewsListProps) {
  return (
    <div className="divide-y divide-gray-300 text-white">
      {news.map((article) => (
        <div
          key={article.artcSeq}
          className="py-4 px-6 hover:bg-gray-100 hover:text-black cursor-pointer"
          onClick={() => onSelectArticle(article.artcSeq)}
        >
          <div className="flex justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{article.artcTitle}</h3>
            </div>
            <div className="flex items-center text-gray-500">
              <MdOutlineCalendarMonth className="mr-1" />
              <span className="mr-4">
                {new Date(article.regDttm).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
              <AiOutlineEye className="mr-1" />
              <span>{article.viewCnt}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
