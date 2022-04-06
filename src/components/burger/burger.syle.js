import styled from "styled-components"

export const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1rem;
  right: 1.25rem;
  display: none;
  z-index: 111;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.light};
    transform-origin: 1px;
    transition: all 250ms linear;

    &:nth-child(1) {
      transform: ${({ openNav }) => (openNav ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ openNav }) =>
        openNav ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ openNav }) => (openNav ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ openNav }) => (openNav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
