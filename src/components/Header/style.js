import styled from "styled-components";
import { Link as HeaderLink } from "react-router-dom";

export const HeaderBlock = styled.header`
  @media (max-width: 426px) {
    background-color: var(--dark);
    z-index: 99;
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--lightText);
  }
  @media (min-width: 426px) and (max-width: 769px) {
    background-color: var(--dark);
    z-index: 99;
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--lightText);
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    background-color: var(--dark);
    z-index: 99;
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--lightText);
  }
  @media (min-width: 1026px) {
    background-color: var(--dark);
    z-index: 99;
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--lightText);
  }
`;

export const HeaderText = styled.p`
  @media (max-width: 426px) {
    font-size: 0.9em;
    margin-left: 1.5em;
    color: var(--lightText);
  }
  @media (min-width: 426px) and (max-width: 769px) {
    margin-left: 2em;
    color: var(--lightText);
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    margin-left: 2em;
    color: var(--lightText);
  }
  @media (min-width: 1026px) {
    margin-left: 4.5em;
    color: var(--lightText);
  }
`;

export const Link = styled(HeaderLink)`
  @media (max-width: 426px) {
    text-decoration: none;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    text-decoration: none;
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    text-decoration: none;
  }
  @media (min-width: 1025px) {
    text-decoration: none;
  }
`;
