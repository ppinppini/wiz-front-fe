import { IoMdHome } from "react-icons/io";

type PageLocatorProps = {
    pagePath : string;
    currentPage : string;
}

const PageLocator = ({pagePath, currentPage} : PageLocatorProps) => {
  return (
    <div className="w-full flex flex-row gap-2 text-sm text-[#b7b7b7] justify-end items-center">
        <IoMdHome />
        <span>HOME</span>
        <span>{pagePath}</span>
        <span className="text-red-500">{currentPage}</span>
    </div>
  );
}
export default PageLocator