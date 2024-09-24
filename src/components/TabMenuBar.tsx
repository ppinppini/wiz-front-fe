import '../styles/tabmenubar.css';
import { Link } from 'react-router-dom';

export type TabProps = {
  tabs: {
  title: string;
  route: string;
  }[],
  tabtitle: string;
  }
const TabMenuBar = ({ tabs, tabtitle }:TabProps) => {


  return (
   
    <div
      className={`flex items-center justify-start mx-auto border-b border-white/70`}
      style={{ width: '1240px', height: '80px' }}
    >
      <ul className="flex h-full items-center justify-center space-x-[34px]">
        {tabs.map((item, index) => {
          const isActive = tabtitle === item.title;
  
          return (
            <li
              key={index}
              className='relative flex items-center justify-center h-full transition duration-200 border-transparent'
            >
              <Link
                to={item.route}
                className={`flex items-center h-full text-lg text-white transition duration-200 opacity-70 ${isActive ? 'tab_select' : 'tab_menu'}`}
              >
                {item.title}
              </Link>
            </li>
          );
        })};
      </ul>
    </div>
  );
};

export default TabMenuBar;