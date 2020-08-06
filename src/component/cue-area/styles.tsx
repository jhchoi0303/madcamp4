import styled from "styled-components/macro"

export const CueArea = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
`

export const CueSide = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 0 3%;
`

export const Cue = styled.button`
  box-sizing: border-box;
  text-align: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 0 10px;
`

export const CueTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: white;
`