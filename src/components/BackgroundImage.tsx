import React from 'react'

interface BackgroundImageProps {
    imageUrl: string;
    children?: React.ReactNode;
    className?: string;
    height?: string;
    zIndex?: number;
}

const BackgroundImage = ({ imageUrl, children, className, height, zIndex }: BackgroundImageProps) => {

  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    width: '100%',
    backgroundPosition: 'center',

    zIndex: zIndex || 999, //zIndex props를 사용, 기본값 999

    backgroundAttachment: 'fixed',
    backgroundSize: '100% 100%',
    height: height || '900px',
    filter: 'brightness(0.75) saturate(0.8)'
  };

  return (
    <div style={backgroundStyle} className={className}>
      {children}
    </div>
  )
}

export default BackgroundImage;
