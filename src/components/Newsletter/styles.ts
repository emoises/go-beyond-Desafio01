import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  width: 100vw;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 22px;
  .inputs-container{
      display: flex;
      flex-direction: row;
  }
    .inputs-container div input{
        outline: none;
        border: none;
        width: 280px;
        height: 48px;
        margin-right: 8px;
        margin-top: 15px;
        padding: 10px 20px;
        border-radius: 5px;
    }
    .inputs-container button{
        margin: 15px 8px 0 0;
        border: none;
        width: 140px;
        height: 48px;
        border-radius: 5px;
        background: #E9BF33;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: 900;
        color: #f2f2f2;
    }
    .inputs-container p{
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        font-family: 'Lato', sans-serif;
        font-size: 12px;
        font-weight: '400';
        color: #D7182A;
    }
    .validation:first-child{
        padding-right: 180px;
    }
    .submited{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .submited span{
        font-family: 'Lato', sans-serif;
        font-size: 12px;
        font-weight: 400;
        color: #333333;
        text-align: center;
    }
    .submited span strong{
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #000000;
    }
    .submited button{
        width: 328px;
        height:48px;
        border: none;
        border-radius: 5px;
        background: #000000;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        color: #fff;
        margin-top: 15px;
    }
`;
