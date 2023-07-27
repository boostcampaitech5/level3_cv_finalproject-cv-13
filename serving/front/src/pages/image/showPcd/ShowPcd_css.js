import styled from 'styled-components'
import { colors } from '../../../design/design'

export const ShowPcdBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 70vh;
  width: 80vw;

  background-color: ${colors.Background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PointSizeDiv = styled.div`
  position: relative;

  height: 8vh;
  width: 80vw;

  display: flex;
  justify-content: start;
  align-items: center;

  z-index: 9999;
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
  margin-top: 2vh;
  right: 0;

  height: 60vh;
  width: 80vw;
`

export const PointSizeTextDiv = styled.div`
  margin-right: 0.5vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

export const ReviewDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  height: 4vh;
  width: 13vw;

  border: 0.5vh dotted ${colors.Nav};
  color: ${colors.Nav};
  overFlow: hidden;
  transition: all 0.8s;
  &:hover {
    height: 30vh;
    width: 20vw;
    border: 0.5vh dotted ${colors.Else};
    color: ${colors.Else};
  }

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  z-index: 99999
`

export const ReivewTextDiv = styled.div`
  width: 19vw;
  height: 2vh;
`

export const ReviewTopText = styled.p`
  font-size: 2vh;
  margin: 1vh 0 0 1vw;
  cursor: default;
  font-family: 'WorkSans';
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const ReviewText = styled.p`
  font-size: 2vh;
  margin: 1vh 0 0 1vw;
  cursor: default;
  font-family: 'WorkSans';
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const ReviewStarDiv = styled.div`
  margin: 0.5vh 0 0 1vw;
  height: 4vh;
  width: 19.9vw;
`

export const Star = styled.img`
  height: 4vh;
  width: 4vh;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const Submit = styled.div`
  position: relative;
  left: 2vw;
  top: 2vh;

  height: 4vh;
  width: 10vw;

  border: 0.5vh solid rgba(0, 0, 0, 0);
  color: ${colors.Else};

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  &:hover{
    background-color: ${colors.Else};
    border: 0.5vh solid ${colors.Else};
    color: ${colors.Background};
  }
`

export const SubmitText = styled.p`
  font-size: 2vh;
  cursor: default;
  font-family: 'WorkSans';
  font-weight: bold;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`