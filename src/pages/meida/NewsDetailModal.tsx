import { NewsDetail } from "../../types/types";

interface NewsDetailModalProps {
  article: NewsDetail;
  isOpen: boolean;
  onClose: () => void;
}

function NewsDetailModal({
  article,
  isOpen,
  onClose,
}: NewsDetailModalProps): JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 modal-content">
        <button
          onClick={onClose}
          className="float-right text-lg font-bold bg-gray-300"
        >
          X
        </button>

        <h2 className="text-xl font-bold ">{article.artcTitle}</h2>
        <div
          className="modal-body"
          dangerouslySetInnerHTML={{ __html: article.artcContents }}
        />
      </div>
    </div>
  );
}

export default NewsDetailModal;
