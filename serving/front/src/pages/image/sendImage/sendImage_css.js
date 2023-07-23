import styled from 'styled-components'
import { colors } from '../../../design/design'

export const sendImageBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  height: 70vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const imageSendTextDiv = styled.div`
  width: auto;
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-right: 4vw;
`

export const imageSendText = styled.p`
  font-family: 'WorkSans';
  color: ${colors.Else};
  font-size: min(13vh, 6.5vw);
  margin: 0;
  cursor: default;
`
export const imageSelectForm = styled.form`
  width: 40vw;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* margin-right: ${(props) => props.margin}; */
`

export const imageSelectBtn = styled.input`
  display: none;
`

export const imageSelectLabel = styled.label`
  width: 40vw;
  height: 60vh;

  display: flex;
  justify-content: center;
  align-items: center;
  
  display: ${(props) => props.select};

  color: white;
  background-color: ${colors.Nav};
  transition: all 0.5s;

  &:hover{
    background-color: ${colors.Background};
    border: min(0.5vh, 0.5vw) solid ${colors.Nav};

    width: 39.5vw;
    height: 59.5vh;
    color: ${colors.Nav};
  }
`

export const imageSendLabel = styled.label`
  position: absolute;
  top: 5vh;

  width: 40vw;
  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  display: ${(props) => props.send};
  font-family: 'WorkSans';
  font-size: min(20vh, 10vw);
  color: white;

  background-color: ${colors.Nav};
  transition: all 0.5s;

  &:hover{
    width: 40vw;
    height: 60vh;
    /* background-color: ${colors.Background};
    border: min(0.5vh, 0.5vw) solid ${colors.Nav};
    color: ${colors.Nav}; */
    z-index: 99;
  }
`

export const imageCheckDiv = styled.div`
  height: 60vh;
`

export const imageCheckImage = styled.img`
  height: 60vh;

  margin: 0 5vw 0 0;
`

export const imageSubmitBtn = styled.input`
  display: none;
`

export const imageSelectLabelText = styled.p`
  font-family: 'WorkSans';
  font-size: min(20vh, 10vw);
  margin: 0;
  cursor: default;
`

export const imageSendLabelText = styled.p`
  font-family: 'WorkSans';
  font-size: min(15vh, 7.5vw);
  margin: 0;
  cursor: default;
`

export const selectOtherDiv = styled.div`
  position: absolute;
  bottom: 5vh;

  width: 24.5vw;
  height: 7.5vh;

  padding-left: 7.5vw;
  padding-right: 7.5vw;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  display: ${(props) => props.send};

  font-family: 'WorkSans';
  font-size: min(5vh, 2vw);
  color: ${colors.Nav};

  background-color: ${colors.Background};
  transition: all 0.8s;

  border: min(0.5vh, 0.5vw) solid ${colors.Nav};
  &:hover{
    padding: 0;

    flex-direction: column;
    justify-content: center;

    font-size: min(15vh, 7.5vw);

    width: 39.5vw;
    height: 59.5vh;
    background-color: ${colors.Background};
    border: min(0.5vh, 0.5vw) solid ${colors.Nav};
    color: ${colors.Nav};
    z-index: 99;
  }
`

export const selectOtherDivText = styled.p`
  font-family: 'WorkSans';
  margin: 0;
  cursor: default;
`