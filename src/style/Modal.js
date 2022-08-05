import styled from "styled-components";

export const Dim = styled.div `
  position: absolute;
  top: 0;
  left:0;
  z-index:99;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);

`;

export const Modal = styled.div `

  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  z-index:100;
  background-color: #202020;
  border-radius: 20px;
  padding:5rem;
  color:#fff;

  .content{

    h2{
      font-size: 24px;
    }
    
    h3{
      font-size: 1rem;
      color: #aaa;
    }
  }

  .comments{
    margin-top:3rem;
    background-color: #323232;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 1.5rem;

    strong{
      font-size: 1rem;
      color: #aaa;
    }

    h3{
      margin:0.5rem;
    }

    li div{
      margin-bottom: 2rem;
    }

  }

`;

export const Close = styled.div `

  width:2rem;
  height:2rem;
  font-size: 1.5rem;
  float:right;

`;