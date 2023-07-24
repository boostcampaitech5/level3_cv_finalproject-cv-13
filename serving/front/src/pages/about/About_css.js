import styled from 'styled-components'
import { colors } from '../../design/design'

export const AboutBackground = styled.div`
  position: absolute;
  top: 20vh;
  left: 0;

  height: 80vh;
  width: 100vw;
`

export const AboutItemDiv = styled.div`
  position: absolute;
  top: 0vh;
  left: 10vw;

  height: 5vh;
  width: 80vw;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  
  margin-right: 1vw;
`

export const AboutItemTextDiv = styled.div`
  height: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  margin-right: 2vw;
`

export const AboutItemText = styled.p`
  margin: 0;

  font-family: 'WorkSans';
  color: ${props => 
    props.color === true && colors.Nav ||
    props.color === false && colors.UnUseNav};
  font-size: min(5vh, 2.5vw);
  cursor: default;
  transition: all 0.5s;

  &:hover {
    color: ${props =>
    props.color === false && colors.Nav}
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const AboutContextDiv =styled.div`
  position: absolute;
  top: 10vh;
  left: 10vw;

  height: 60vh;
  width: 80vw;
`