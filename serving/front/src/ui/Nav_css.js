import styled from 'styled-components'
import { colors } from '../design/design'
import "../fonts/fonts.css"

export const NavBackground = styled.div`
  position: fixed;
  top: 0;
  left: 10vw;

  height: 15vh;
  width: 80vw;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  z-index: 99;
  border-bottom: 0.5vh solid ${colors.Else};
`

export const NavTextDiv = styled.div`
  height: 5vh;

  /* border: 2px solid ${colors.Nav}; */

  margin-right: 2vw;
`

export const NavText = styled.p`
  margin: 0;
  font-family: 'WorkSans';
  color: ${props => 
    props.color === true && colors.Nav ||
    props.color === false && colors.UnUseNav};
  font-size: min(5vh, 2.5vw);
  cursor: default;
  transition: all 0.5s;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    color: ${props =>
    props.color === false && colors.Nav}
  }
`