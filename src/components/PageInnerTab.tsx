import { useState } from "react";
import { Link } from "react-router-dom";

type TabProps = {
  tabs: {
    title: string;
    route: string;
  }[];
  currentTab: string;
};

const PageInnerTab = ({ tabs, currentTab }: TabProps) => {
  const [activeTab, setActiveTab] = useState(currentTab);
  return (
    <>
      <ul className="w-[1100px] my-[50px] flex justify-center space-x-4">
        {tabs.map((tab, index) => (
          <li key={index}>
            <Link
              to={tab.route}
              className={`py-2 px-4 transition-colors duration-300 
                        ${
                          activeTab === tab.title
                            ? "border-b-2 border-red-500 text-red-500"
                            : "text-gray-500 hover:text-red-500"
                        }`}
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default PageInnerTab;
