import React from 'react';

interface GameInfoProps {
    gameDate: string;
    stadium: string;
    gtime: string;
}

const GameInfo: React.FC<GameInfoProps> = ({
    gameDate,
    stadium,
    gtime
}) => {
    return (
        <>
            {/* GAME INFO CARD HEADER CENTER */}
            <div className='text-sm flex flex-col items-center w-full font-sans'>

                {/* DISPLAYED GAME DATE */}
                <div className='notokr text-[1.25em] font-bold mb-[0.625em] text-[#35383e]'>
                    {`${gameDate}`}
                </div>

                {/* DISPLAYED GAME LOCATION & TIME */}
                <div className='notokr text-[0.875rem] text-[#717781]'>
                    {`${stadium} ${gtime}`}
                </div>

            </div>
        </>  
    )
}
export default React.memo(GameInfo);