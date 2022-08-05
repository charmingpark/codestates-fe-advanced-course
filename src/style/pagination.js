import styled from "styled-components";

export const WrapPagenate = styled.div`
width:100%;
padding:1rem;
display:flex;
justify-content:center;
`;

export const PagenateBtn = styled.button`
  border: none;
  width: 2rem;
  padding: 8px;
  color: #fff;
  font-size: 1rem;
  background-color: transparent;
  transition: all 0.3ms;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &.arrowBtn{
    &:hover {
      transform: none !important;
    }
  }

  &[disabled] {
    cursor: auto;
  }

  &[aria-current] {
    font-weight: bold;
    font-size: 1.2rem;
  }


`;