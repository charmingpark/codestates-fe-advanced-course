import styled from "styled-components";

export const HoverCards = styled.div `
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Container = styled.ul `

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 20px 0;

  li.card {
    position: relative;
    min-width: 320px;
    height: 400px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
                inset -5px -5px 15px rgba(255, 255, 255, 0.1),
                5px 5px 15px rgba(0, 0, 0, 0.3),
                -5px -5px 15px rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    margin: 30px;

    & .box button {
      background: #26d367;
       
      &:hover {
      background: #0078d7;
      color:#fff;

      }
    }

  }
  .box {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: #2a2b2f;
    border: 2px solid #1e1f23;
    border-radius: 15px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      pointer-events: none;
    }
    
    &:hover {
      transform: translateY(-50px);
      box-shadow: 0 40px 70px rgba(0, 0, 0, 0.5);
    }

  }
  `;

export const Content = styled.div `

  padding: 20px;
  text-align: center;

  h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8em;
    color: rgba(255, 255, 255, 0.05);
    font-style: italic;
  }

  h3 {
    font-size: 1.8em;
    color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    transition: 0.5s;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    transition: 0.5s;
  }

  button {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 15px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 400;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Error = styled.div `
	color: #cc3535;
	position: absolute;
	padding:5px;
	font-weight: 500;

  &::before {
    display: inline;
    content: "⚠ ";
  }
`;