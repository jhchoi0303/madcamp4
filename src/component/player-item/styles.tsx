import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { THEME_COLOR } from "../../constants";

export const PlayerItem = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 15rem;
  margin-bottom: 1rem;
`;

export const PlayerUrl = styled.textarea`
  height: 4rem;
  width: 25rem;
  padding-top: 0.5rem;
  padding-left: 2rem;
  margin-right: 1rem;
  font-size: 1.7rem;
  letter-spacing: 1px; /* for bettter reading experience */
`;

export const PlayerButton = styled.button`
  width: 40px;
  height: 40px;
`;

export const PlayerUrlContainer = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlayerInfoText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 50rem;
  height: 10rem;
`;

export const PlayerTitle = styled.div`
  width: 20rem;
  height: 5rem;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayerTime = styled.div`
  width: 20rem;
  height: 5rem;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayerWavForm = styled.canvas`
  height: 20rem;
  width: 20rem;
`;
