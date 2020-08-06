import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { THEME_COLOR, BREAKPOINT } from "../../constants";

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 7rem;
  align-items: center;
  height: 10rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 13rem;
  }
  color: white;
`;

export const DesktopButtons = styled.div`
  height: 50%;
  display: none;
  margin-right: 10rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
  }
  color: white;
`;

export const MobileButtons = styled.div`
  height: 100%;
  display: flex;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
  color: white;
`;

export const DesktopLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
  }
`;

export const MobileLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const Buttons = styled.button`
  margin-right: 1rem;
  outline: none;
  background-color: inherit;
  font-size: 1.2rem;
  font-weight: bolder;
  border-radius: 2px;
  border: none;
  display: flex;
  background: rgba(191, 191, 191, 1);
  align-items: center;
  justify-content: center;
  color: black;

  height: 4rem;
  width: 9rem;

  transition: background-color 0.5s;

  img {
    width: 2rem;
    height: 2rem;
  }

  :hover {
    color: rgba(232, 236, 241, 1);
  }
`;
