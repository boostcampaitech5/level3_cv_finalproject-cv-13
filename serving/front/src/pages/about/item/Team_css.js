import styled from 'styled-components'
import { colors } from '../../../design/design'

export const TeamBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 60vh;
  width: 80vw;
`

export const TeamText = styled.p`
  margin: 0;

  font-family: 'WorkSans';
  color: ${colors.Nav};
  font-size: min(2vh, 1vw);
  cursor: default;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`