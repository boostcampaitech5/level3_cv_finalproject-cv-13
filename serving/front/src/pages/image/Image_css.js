import styled from 'styled-components'
import { colors } from '../../design/Design'

export const ImageBackground = styled.div`
  position: absolute;
  top: 20vh;
  left: 10vw;

  height: 70vh;
  width: 80vw;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  overflow-X: ${props => props.scroll};
  overflow-Y: hidden;

  &::-webkit-scrollbar {
    height: 1vh;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.Else};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.Nav};
    border-radius: 10px;

  }
`