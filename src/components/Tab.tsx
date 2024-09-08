import { useState } from "react";
import { Link } from "react-router-dom";

type TabProps = {
    tabs: {
        title: string;
        route: string;
    }[];
}

const Tab = ({ tabs } : TabProps) => {
const [activeTab, setActiveTab] = useState(0);
  return (
    <>
    
    <ul className="w-[1100px] bg-green-300 flex justify-center space-x-4">
        {tabs.map((tab, index) => (
            <li key={index}>
                <Link
                    to={tab.route}
                    className={`py-2 px-4 transition-colors duration-300 
                        ${
                            activeTab === index
                                ? "border-b-2 border-red-500 text-red-500"
                                : "text-gray-500 hover:text-red-500"
                        }`}
                    onClick={() => setActiveTab(index)}
                >
                    {tab.title}
                </Link>
            </li>
        ))}
    </ul>
  </>
  );
}
export default Tab