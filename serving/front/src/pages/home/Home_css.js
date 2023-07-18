import styled from 'styled-components'
import { colors } from '../../design/Design'

export const HomeBackground = styled.div`
  position: absolute;
  left: 0;
  top: 20vh;

  height: 80vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background-color: ${colors.Background};
  /* background-color: black; */
`