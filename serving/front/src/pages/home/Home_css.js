import styled from 'styled-components'
import { colors } from '../../design/design'

export const HomeBackground = styled.div`
  position: absolute;
  left: 10vw;
  top: 20vh;

  height: 70vh;
  width: 80vw;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.Background};
  /* background-color: black; */
`
export const HomePurposeDiv = styled.div`
  position: relative;
  height: 70vh;
  width: 35vw;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  word-break: break-all;
  /* border: solid 0.5vh ${colors.Nav}; */
`

export const HomeProcessDiv = styled.div`
  position: relative;

  height: 70vh;
  width: 35vw;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  word-break: break-all;
  /* border: solid 0.5vh ${colors.Nav}; */
`

export const HomeSequenceDiv = styled.div`
  height: 70vh;
  width: 43vw;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  word-break: break-all;
  /* border: solid 0.5vh ${colors.Nav}; */
`

export const HomeDivTitleText = styled.p`
  color: ${colors.Else};

  margin: 0;
  font-family: 'WorkSans';
  cursor: default;
  font-size: min(10vh, 5vw);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    color: ${colors.BoldElse};
    font-size: min(12vh, 6vw);
    transition: all 0.5s;
  }
`

export const HomeDivSubTitleText = styled.p`
  color: ${colors.Else};

  margin: 3vh 0 0 0;
  font-family: 'WorkSans';
  cursor: default;
  font-size: min(6vh, 3vw);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    color: ${colors.BoldElse};
    font-size: min(8vh, 4vw);
    transition: all 0.5s;
  }
`

export const HomeDivContextText = styled.p`
  color: ${colors.Else};

  margin: 0;
  font-family: 'WorkSans';
  cursor: default;
  font-size: min(3vh, 1.5vw);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  overflow-wrap: break-word;

  &:hover {
    color: ${colors.BoldElse};
    font-size: min(4vh, 2vw);
    transition: all 0.5s;
  }
`

export const HomeDivSequenceText = styled.p`
  color: ${colors.Else};

  margin: 3vh 0 0 0;
  font-family: 'WorkSans';
  cursor: default;
  font-size: min(3vh, 1.5vw);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  overflow-wrap: break-word;

  &:hover {
    color: ${colors.BoldElse};
    font-size: min(4vh, 2vw);
    transition: all 0.5s;
  }
`

export const SwitchStateBtn = styled.div`
  position: absolute;
  right: 0;
  top: 3vh;

  width: 10vw;
  height: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  background-color: ${colors.Else};
  color: ${colors.Background};
  font-weight: bold;
  border: 0.5vh solid ${colors.Background};

  &:hover {
    border: 0.5vh solid ${colors.Else};
    background-color: ${colors.Background};
    color: ${colors.Else};
  }
`

export const SwitchStateBtnText = styled.p`
  margin: 0;
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`