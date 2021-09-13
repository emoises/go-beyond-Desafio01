import React from 'react';

// import { Container } from './styles';




const Radio: React.FC<SliderImagesProps> = ({images}) => {
  return (
      <>
      {
          images.map( ( _ , idx ) => {
              const id = `radio-btn-0${idx+1}`
            return(
                <input key={idx} className="radio-buttons" type="radio" name="radio-btn" id={id} />
            )
              
          })
      }

      </>
  );
}

export default Radio;