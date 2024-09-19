import React from 'react'

interface BackgroundImageProps {
    imageUrl: string;
    children?: React.ReactNode;
    className?: string;
    height?: string;
}

const BackgroundImage = ({ imageUrl, children, className, height }: BackgroundImageProps) => {

  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    width: '100%',
    backgroundPosition: 'center',
    zIndex: -1,
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
