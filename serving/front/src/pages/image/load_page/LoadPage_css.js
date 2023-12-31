import styled from 'styled-components'
import { colors } from '../../../design/design'

export const LoadPageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 70vh;
  width: 80vw;

  color: ${colors.Else};
  background-color: ${colors.Background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoadPageTextDiv = styled.div`
  width: 80vw;
  height: 5vh;
`

export const LoadPageText = styled.p`
  font-size: min(2vh, 1vw);
  font-family: 'WorkSans';
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const LoadPageImgDiv = styled.div`
  width: 80vw;
  height: 70vh;  
`