import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Container } from './styles';

const Products: React.FC = () => {
  const [increment, setIncrement] = useState(1)
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const myScreen = screen.width
    console.log(myScreen)
  }, [])
useEffect(()=>{
  if(increment<0) return setIncrement(0)
  if(increment>9) return setIncrement(9)
  console.log(increment)
},[increment])
  
  return (
      <Container >
          <div className="products-container">
            <strong>Mais Vendidos</strong>
            <div className="span-detail" ></div>
            <div className="products-slider">
              <button className="products-control" value={-1} onClick={e => setIncrement(Number(e.currentTarget.value)+increment)}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div 
                className="items-container" 
                  style={{
                    gridTemplateColumns: "repeat(12,1fr)",
                    }}>
                  {
                    [...Array(12)].map( (item, idx) => {
                      return(
                        <Items key={idx} increment={increment}/>
                      )
                    })
                  }
              </div>
              <button className="products-control" value={1} onClick={e => setIncrement(Number(e.currentTarget.value)+increment)}>
              <FontAwesomeIcon icon={faChevronRight} name="right" onClick={() => {}} />

              </button>
            </div>
          </div>
      </Container>
    );
}

export default Products;