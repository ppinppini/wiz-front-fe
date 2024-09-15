import React from 'react';
import '../styles/tabmenubar.css';

const TabMenuBar = () => {

  const menuItems = ['코칭스탭', '투수', '포수', '내야수', '외야수', '응원단'];  

  return (
    <div
      className="flex items-center justify-start mx-auto border-b tab_menu border-white/70"
      style={{ width: '1240px', height: '80px' }}
    >
      <ul className="flex h-full items-center justify-center space-x-[34px]">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative flex items-center justify-center h-full transition duration-200 border-transparent hover:border-white"
          >
            <a
              href="#"
              className="flex items-center h-full text-lg text-white transition duration-200 opacity-70 hover:opacity-100"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabMenuBar;