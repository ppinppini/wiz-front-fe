import "../styles/tabmenubar.css";
import { Link } from "react-router-dom";

type TabProps = {
    menuItems: {
        title: string;
        route: string;
    }[];
};

const TabMenuNavbar = ({ menuItems }: TabProps) => {
    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-start w-full h-20 bg-black border-b bg-opacity-60 tab_menu border-white/70">
            <ul className="flex h-full items-center space-x-[34px] px-[140px]">
                {menuItems.map((item, index) => (
                    <li key={index} className="relative flex items-center h-full transition duration-200">
                        <Link to={item.route} className="relative flex items-center h-full text-[17px] text-white transition duration-200 opacity-70 hover:opacity-100">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TabMenuNavbar;