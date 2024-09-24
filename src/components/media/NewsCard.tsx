import { NewsList } from "../../types/types";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

interface NewsCardProps {
  article: NewsList;
}

function NewsCard({ article }: NewsCardProps) {
  const date = new Date(article.regDttm).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-4 h-[300px] w-[350px] flex flex-col justify-between">
      <img
        src={article.imgFilePath || "/placeholder.jpg"}
        alt={article.artcTitle}
        className="h-40 w-full object-cover rounded line-clamp-2"
      />
      <h3 className="text-lg font-bold mt-2">{article.artcTitle}</h3>
      <div className="text-gray-600 text-sm mt-2 flex items-center">
        <MdOutlineCalendarMonth className="text-gray-600 mr-1" />
        <span>{date}</span>
        <AiOutlineEye className="ml-4 text-gray-600 mr-1" />
        <span>{article.viewCnt}</span>
      </div>
    </div>
  );
}

export default NewsCard;
