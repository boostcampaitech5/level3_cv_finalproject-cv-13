import styled from 'styled-components'
import { colors } from '../../../design/design'

export const LoadPageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  color: ${colors.Else};
  background-color: ${colors.Background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoadPageTextDiv = styled.div`
  width: 100%;
  height: 10%;
`

export const LoadPageText = styled.p`
  font-size: min(13vh, 6.5vw);
`

export const LoadPageImgDiv = styled.div`
  width: 100%;
  height: 90%;  
`