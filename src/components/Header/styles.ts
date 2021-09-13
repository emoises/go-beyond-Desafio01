import styled from 'styled-components';

export const Container = styled.div`

body{
    background: var(--bg-primary);
}
width: 100vw;
position: fixed;
left: 0;
top: 0;
height: 80px;
background: #fff;
z-index: 20;
.header-container{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    font: var(--font-first--22--bold);
}
.header-container img {
    height: 49px;
}
.header-container .menu ul  {
    display:flex ;
    flex-direction: row;
}
.header-container .menu ul li {
    text-decoration: none;
    list-style: none;
}
.header-container .menu ul li a{
    padding: 0 17px;
    color: var(--text-color-primmary);
    text-decoration: none;
}
.search-container{
    width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #bbb;
}
.search-container input{
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    background: none;
}
.search-container .vector-icons{
    height: 18px;
}
.user-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
.user-container img{
    padding-left: 20px;
    height: 18px;
}
.user-container a{
    text-decoration: none;
    color: #7A7A7A;
}
#banner-gradient{
    position: absolute;
    top: 80px;
    width: 80%;
    height: 25vw;
    background: linear-gradient(270deg,rgba(0,0,0,0), rgba(0,0,0,.9), rgba(0,0,0,1));
}
`;
