import React from 'react';

import { Container } from './styles';

const SliderImages: React.FC<SliderImagesProps> = ({images,primaryText, secondaryText}) => {
  return (
  <>
  {
      images.map( (image,idx) => {
        const slideClassName = idx === 0 ? "slide first" : "slide"
        return(
            <div key={idx} className={slideClassName}>
              <Container>
                <img src={image} alt="" />
              </Container>
            </div>
        )
      })
  }
  </>
    );
}

export default SliderImages;