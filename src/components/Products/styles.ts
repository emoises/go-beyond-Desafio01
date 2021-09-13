import styled from 'styled-components';

export const Container = styled.div`
display:flex;
justify-content: center;
flex-direction: row;

.products-container{
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      width: 1020px;
      height: auto;

  }
.products-container strong{
      font-family: 'Nunito';
      font-weight: bold;
      font-size: 20px;

  }
  .span-detail{
        width: 65px;
        height:3px;
        background-color: #E9BF33;
  }
  .items-container{
        display: grid;
        /* grid-template-columns: repeat(4, 1fr); */
        height: auto;
        flex-direction: row;
        overflow: hidden;
        gap: 20px;
        padding:  0 5px;
  }
  .items-container:first{
    padding-left: 5px;
    background: chartreuse;
}
  .products-slider{
      display: flex;
      flex-direction: row;
      align-items: center;
  }
  .products-control{
      width: 50px;
      height: 50px;
      display: flex;
      justify-content:center;
      align-items: center;
      border: none;
      border-radius: 10px;
      background: rgba(50,50,50,0.1);
      margin: 5px;
      padding:5px;
      cursor: pointer;  
  }
  .products-control:hover{
    background: rgba(100,100,100,0.1);
  }
`;
