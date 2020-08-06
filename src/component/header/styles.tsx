import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { THEME_COLOR, BREAKPOINT } from "../../constants";

interface ActiveProps {
  active?: boolean;
}

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 14rem;
  }
  color: white;
`;

export const Logo = styled.img`
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
    width: 15rem;
  }
`;

export const MobileLogo = styled.img`
  width: 9rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
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

export const Content = styled.div`
  height: 2rem;

  display: none;

  min-width: 75px;
  padding: 5px;
  border: 1rem;
  padding: 1rem;
  color: white;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 11rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

export const Option = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  :hover ${Content} {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  color: white;
`;

export const Buttons = styled.button`
  height: 100%;
  margin-top: 20px;
  outline: none;
  background-color: inherit;
  font-size: 1.5rem;
  font-weight: bolder;
  border: none;
  display: flex;

  color: white;
  :hover ${Content} {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  @keyframes increase {
    100% {
      width: 20rem;
    }
  }
  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 4rem;
    width: 13rem;
    padding: 0rem 2rem;
    transition: background-color 0.5s;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  :hover {
    -webkit-animation: increase 1s;
    -moz-animation: increase 1s;
    -o-animation: increase 1s;
    animation: increase 1s;
    animation-fill-mode: forwards;
    justify-content: center;
    border-bottom: 1px solid;
  }
`;
