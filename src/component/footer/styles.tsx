import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components/macro";

import { BREAKPOINT, THEME_COLOR } from "../../constants";

export const Footer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 6rem;
  background-color: ${THEME_COLOR.PRIMARY};
  z-index: 100;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const FooterComponent = styled(ReactLink)`
  text-decoration: none;
  width: 33.33%;
  height: 100%;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
