import styled from 'styled-components';

export const Container = styled.div`

margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  width: 100vw;
  font: 'Nunito', sans-serif;
  #gradient{
    position: absolute;
    top: 80px;
    width: 80%;
    height: 220px;
    display: flex;
    flex-direction: column;
    /* align-items:center; */
    justify-content:center;
    padding-left: 15vw;
    background: linear-gradient(270deg,rgba(0,0,0,0), rgba(0,0,0,.9), rgba(0,0,0,1));
  }
  #gradient span{
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-size: 25px;
      line-height: 40px;
      color: #fff;
      width: 600px;
      
    }
    #gradient strong {
      font-weight: 900;
      font-size: 35px;
      line-height: 40px;
      color: #E9BF33;

  }
  .control{
      font-weight: bold;
      z-index: 10;
      color: #fff;
      padding: 10px;
      background: rgba(0,0,0,.2);
      border-radius: 5px;
      cursor: pointer;
  }
  #next{
      position: absolute;
      right: 0;
    }
    #prev{
      position: absolute;
      left: 0;
  }
    .slides-xpto{
        width: 100%;
        height:220px;
        display: flex;
        align-items: center;
        overflow: hidden;
        /* box-shadow: -10px -10px 15px 15px rgba(0,0,0,.7) */
    }
    .slides-xpto input{
        display: none;
    }
    .slide{
        transition: 1s;
    }
    .slide img{
        width: 100vw;
    }

  .navigation-manual{
    position: absolute;
    width: 100%;
    margin-bottom: -200px;
    display: flex;
    justify-content: center;
    
}
.navigation-manual label{
      border-radius: 50%;
    display:flex;
    margin: 2px 0px;
  }
  .manual-btn{
    border: 2px solid rgba(242,245,245,.6);
    padding: 5px;
    cursor: pointer;
    transition: .4s;
  }
  .manual-btn:not(:last-child){
      margin-right: 40px;
  }
  .manual-btn:hover{
    background: rgba(242,245,245,.6);
}
#radio-btn-01:checked ~ .first{
    margin-left: 0;
}
#radio-btn-02:checked ~ .first{
    margin-left: -100%;
}
#radio-btn-03:checked ~ .first{
    margin-left: -200%;
}
#radio-btn-04:checked ~ .first{
    margin-left: -300%;
}
#radio-btn-05:checked ~ .first{
    margin-left: -400%;
}
#radio-btn-06:checked ~ .first{
    margin-left: -500%;
}
#radio-btn-07:checked ~ .first{
    margin-left: -600%;
}
#radio-btn-08:checked ~ .first{
    margin-left: -700%;
}
#radio-btn-09:checked ~ .first{
    margin-left: -800%;
}
/* css for automatic navigation */

.navigation-auto{
    position: absolute;
    display:flex;
    width: 100%;
    justify-content: center;
    margin-top: 200px;
}
.navigation-auto div{
    border-radius: 50%;
    border: 2px solid rgba(242,245,245,.6);
    padding: 5px;
    transition: 1s;
    
}
.navigation-auto div:not(:last-child){
    margin-right: 40px;
}

#radio-btn-01:checked ~ .navigation-auto .auto-btn1{
    background: rgba(242,245,245,.6);
}
#radio-btn-02:checked ~ .navigation-auto .auto-btn2{
    background: rgba(242,245,245,.6);
}
#radio-btn-03:checked ~ .navigation-auto .auto-btn3{
    background: rgba(242,245,245,.6);
}
#radio-btn-04:checked ~ .navigation-auto .auto-btn4{
    background: rgba(242,245,245,.6);
}
#radio-btn-05:checked ~ .navigation-auto .auto-btn5{
    background: rgba(242,245,245,.6);
}
#radio-btn-06:checked ~ .navigation-auto .auto-btn6{
    background: rgba(242,245,245,.6);
}
#radio-btn-07:checked ~ .navigation-auto .auto-btn7{
    background: rgba(242,245,245,.6);
}
#radio-btn-08:checked ~ .navigation-auto .auto-btn8{
    background: rgba(242,245,245,.6);
}
#radio-btn-09:checked ~ .navigation-auto .auto-btn9{
    background: rgba(242,245,245,.6);
}
`;
