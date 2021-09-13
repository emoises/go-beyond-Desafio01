import styled from 'styled-components';

export const Container = styled.div`
  height: 213px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 12px;
  color: #ffffff;
  .adress span {
      font-size: 20px;
      font-weight: 700;
  }
  .adress .decoration {
      width: 50px;
      border: 3px solid #E9BF33;
      margin: 20px 0;
  }
  .contact{
      display: flex;
      flex-direction: column;
  }
  .contact a{
      width: 195px;
      height: 38px;
      border: none;
      background: #E9BF33;
      border-radius: 5px;
      color: #fff;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      text-decoration: none;
      cursor: pointer;
    }
    .contact span:not(:first-child){
        padding-left: 10px;
    }
    .contact a:not(:first-child){
      padding: 0 10px;

  }
  .contact a:first-child{
    margin-bottom: 25px;
  }
  .logos{
      width: 200px;
      font-size: 10px;
      color: #E9BF33;
  }
  .logos .sponsors{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 20px 10px 0;
  }
  .logos .sponsors div{
      display: flex;
      flex-direction: column;
      margin-right: 15px;
  }
  .developer .social-midia a img {
    margin-right: 20px;
  }
  .social-midia img{
    width: 20px;
    color: #fff;
  }
`;
