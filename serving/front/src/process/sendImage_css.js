import styled from 'styled-components'
import { colors } from '../design/design'

export const sendImageBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${colors.WhiteBlue}
`

export const imageSendForm = styled.form`
  width: 5vw;
  height: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${colors.Se};
`

export const imageSendBtn = styled.input`
`

export const sendSubmitBtn = styled.input`
  width: 3vw;
  height: 3vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`