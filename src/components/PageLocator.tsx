import { IoMdHome } from "react-icons/io";

type PageLocatorProps = {
    pagePath : string;
    currentPage : string;
}

const PageLocator = ({pagePath, currentPage} : PageLocatorProps) => {
  return (
    <div className="flex flex-row gap-2 items-center text-sm text-[#b7b7b7] right-0">
        <IoMdHome />
        <span>HOME</span>
        <span>{pagePath}</span>
        <span className="text-red-500">{currentPage}</span>
    </div>
  );
}
export default PageLocator