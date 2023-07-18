import styled from 'styled-components'
import { colors } from '../../design/Design'

export const MainBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  height: 100vh;
  width: 100vw;
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background-color: ${colors.Background};
  /* background-color: black; */
`