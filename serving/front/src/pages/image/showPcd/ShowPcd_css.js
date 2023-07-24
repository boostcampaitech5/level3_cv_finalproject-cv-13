import styled from 'styled-components'
import { colors } from '../../../design/design'

export const ShowPcdBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 70vh;
  width: 100vw;

  background-color: ${colors.Background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PointSizeDiv = styled.div`
  position: relative;

  left: 10vw;

  height: 5vh;
  width: 100vw;

  display: flex;
  justify-content: start;
  align-items: center;
`


export const PointSizeUpBtn = styled.div`
  height: 4vh;
  width: 4vh;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.5vh solid ${colors.Nav};
  z-index: 10000;

  margin-right: 1vh;

  &:hover {
    transition: all 0.5s;
    height: 5vh;
    width: 5vh;
  }
`

export const PointSizeDownBtn = styled.div`
  height: 4vh;
  width: 4vh;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.5vh solid ${colors.Nav};
  z-index: 10000;

  margin-right: 1vh;

  &:hover {
    transition: all 0.5s;
    height: 5vh;
    width: 5vh;
  }
`

export const PointSizeViewDiv = styled.div`
  height: 4vh;
  width: 12vh;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const PointSizeText = styled.p`
  color: ${colors.Nav};
  font-size: 2vh;
  margin: 0;
  cursor: default;
  font-family: 'WorkSans';
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const TopPointSizeText = styled.p`
  position: absolute;
  top: -3.5vh;
  color: ${colors.Nav};
  font-size: 2vh;
  margin: 0;
  cursor: default;
  font-family: 'WorkSans';
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const ExampleImageDiv = styled.div`
  position: relative;
  right: 0;
  height: 85vh;
  width: 100vw;
`