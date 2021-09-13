import React from 'react';

// import { Container } from './styles';

const NavigationManual: React.FC<SliderImagesProps> = ({images}) => {
  return (
    <>
        {
          images.map( (_, idx) => {
            const htmlFor = `radio-btn-0${idx+1}`;
            return <label key={idx} htmlFor={htmlFor} className="manual-btn" ></label>;
          })
        }
    </>
  );
}

export default NavigationManual;