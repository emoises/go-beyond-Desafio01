import styled from 'styled-components';

export const Container = styled.div`
padding: 5px 5px ;
  label img {
    width: 15px;
    height: auto;
}
#star {
    fill: aqua;
}
input{
  display: none;
}
label .rateIconPromise{
  transition: all 0.2s ease;

}
.rateIconPromise:hover,
.rateIconPromise:checked{
  color: #ffd874;
}
`;
