import styled from "styled-components";

export const LoadingContainer = styled.div `

  display: flex;
  position: absolute;
  z-index:100;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

`;

export const LoadingBox = styled.div `

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;

.text {
  color: #fff;
  font-size: 20px;
}

.circle {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid #404040;
  border-top: 3px solid #fff;
  border-radius: 100%;
  animation: loading 1.8s ease-in-out infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

`;