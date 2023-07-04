import styled from 'styled-components'
import { colors } from '../design/design'

export const mainBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background-color: ${colors.MainBlue};
`