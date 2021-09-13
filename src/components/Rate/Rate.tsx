import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles';
// import star from '../../assets/star.svg'

const Rate: React.FC = () => {
  const [rating, setRating] = useState(0)
  return (
      <Container>
          {[...Array(5)].map( (star, i)=> {
            const ratingValue = i + 1
            return (
              <label>
                <input 
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={()=> setRating(ratingValue)}
                onFocus={()=> {}}
                />
                <FontAwesomeIcon 
                icon={faStar} 
                color={ ratingValue > rating ? "#bbbbbb" : "#FFD874"}/>
              </label>
            )
          } )}          
      </Container>
  );
}

export default Rate;