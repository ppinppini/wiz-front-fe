import React from 'react'
import '../styles/tabmenubar.css';

const TabMenuNavbar = () => {

  const menuItems = ['코칭스탭', '투수', '포수', '내야수', '외야수', '응원단'];  

  return (
    <div
    className="fixed top-0 left-0 z-50 flex items-center justify-start w-full h-20 bg-black border-b bg-opacity-60 tab_menu border-white/70"
    >
        <ul className="flex h-full items-center space-x-[34px] px-[140px]">
            {menuItems.map((item, index) => (
                <li
                key={index}
                className="relative flex items-center h-full transition duration-200"
                >
                    <a
                        href="#"
                        className="relative flex items-center h-full text-[17px] text-white transition duration-200 opacity-70 hover:opacity-100"
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TabMenuNavbar;
