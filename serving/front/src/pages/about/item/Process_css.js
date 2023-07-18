import styled from 'styled-components'
import { colors } from '../../../design/Design'

export const ProcessBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 60vh;
  width: 80vw;
`

export const ProcessText = styled.p`
  margin: 0;

  font-family: 'WorkSans';
  color: ${colors.Nav};
  font-size: min(2vh, 1vw);
  cursor: default;
`