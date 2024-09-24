interface PaginationProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  totalPages: number;
}
function Pagination({
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) {
  const maxPageVisible = 10; // 한 번에 보여줄 최대 페이지 수

  // 시작 페이지 계산
  const startPage =
    Math.floor((currentPage - 1) / maxPageVisible) * maxPageVisible + 1;
  // 끝 페이지 계산 (시작 페이지에서 9개 페이지를 추가)
  let endPage = startPage + maxPageVisible - 1;
  if (endPage > totalPages) {
    endPage = totalPages; // 총 페이지 수를 초과하지 않도록 조정
  }

  // 계산된 시작 페이지부터 끝 페이지까지의 페이지 배열 생성
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        className={`p-2 bg-gray-300 border`}
      >
        이전
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`p-2 ${currentPage === page ? "bg-red-500" : "bg-white"} min-w-[40px] text-center border`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className={`p-2 bg-gray-300 border`}
      >
        다음
      </button>
    </div>
  );
}

export default Pagination;
