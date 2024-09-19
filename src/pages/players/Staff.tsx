import React from 'react';
import topBanner from '../../assets/top-banner-image.png';
import PlayerNavbar from '../../components/PlayerNavbar';
import TabMenuBar from '../../components/TabMenuBar';


const Staff = () => {
  return (
    
    <div 
      className='title_banner' 
      style={{
        height: '900px', //780px로 변경하시오
        backgroundImage: `url(${topBanner})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundPosition: 'center',
        //backgroundSize: '100% 520px',
        zIndex: -1,
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 100%'
    }}>
      <PlayerNavbar/>
      <section>
        <div>
          <TabMenuBar />
        </div>
      </section>
    </div>
   
  )
}

export default Staff;
