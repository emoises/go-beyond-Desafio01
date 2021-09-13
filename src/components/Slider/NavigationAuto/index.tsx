import React from 'react';

// import { Container } from './styles';

const NavigationAuto: React.FC<SliderImagesProps> = ({images}) => {
  return (
    <>
      {
        images.map( (_, idx) => {
          const dincamicClassName = `auto-btn${idx+1}`
          return <div key={idx} className={dincamicClassName}></div>;
            })
          }
    </>
  );
}

export default NavigationAuto;