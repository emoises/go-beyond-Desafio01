import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Container } from './styles';
import Radio from './Radio';
import SliderImages from './SliderImages';
import NavigationAuto from './NavigationAuto';
import NavigationManual from './NavigationManual';

const Slider: React.FC<SliderProps> = ({data}) => {
  const [imagesCollection, setImagesCollection] = useState<string[]>([])
  const [primaryText, setPrimaryText] = useState<string[]>([])
  const [secondaryText, setSecondaryText] = useState<string[]>([])
  const handleDataImages: Array<any>= data.map( image => {
    if(image.imageUrl) {
      return image.imageUrl
    }
    return null
  })
  const handlePrimaryText: Array<any>= data.map( image => {
    if(image.imageUrl) {
      return image.description.primaryMessage
    }
    return null
  })
  const handleSecondaryText: Array<any>= data.map( image => {
    if(image.imageUrl) {
      return image.description.secondaryMessage
    }
    return null
  })
  
  useEffect(() => {
    if(imagesCollection){
      setImagesCollection([...handleDataImages])
      setPrimaryText([...handlePrimaryText])
      setSecondaryText([...handleSecondaryText])
    }
    console.log(imagesCollection)
  }, [])
  return( 
    <Container>
    <div className="slides-xpto">
      <div className="control" id="previous"><FontAwesomeIcon icon={faChevronLeft} color="#fff"/></div>
    <div id="gradient">
      <span style={{color: '#FFF'}}>{primaryText[0]}</span>
      <strong>{secondaryText[0]}</strong>
    </div>
      {/* radio buttons start */}
      <Radio images={imagesCollection} />  
      {/* radio buttons end */}

      {/* slide images start */}
      <SliderImages images={imagesCollection} primaryText={primaryText} secondaryText={secondaryText}/>
      {/* slide images end */}

      {/* automatic navigation start */}
      <div key="teste" className="navigation-auto">
        <NavigationAuto images={imagesCollection}/>
      </div>
      {/* automatic navigation end */}

      {/* manual navigation start */}
      <div className="navigation-manual">
        <NavigationManual images={imagesCollection}/>
      </div>
      {/* manual navigation end */}
    </div>

      <div className="control" id="next"><FontAwesomeIcon icon={faChevronRight} color="#fff"/></div>
  </Container>
  )
}

export default Slider;
