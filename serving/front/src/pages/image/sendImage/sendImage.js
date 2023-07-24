import React, {useEffect, useState, useRef } from 'react'
import * as s from "./sendImage_css";
import axios from 'axios';
import ShowPcd from '../showPcd/ShowPcd'

export default function SendImage(props) {
  const [file, setFile] = useState('')
  const [image, setImage] = useState('')
  const [select, setSelect] = useState('flex')
  const [send, setSend] = useState('none')

  // const [seed, setSeed] = useState(-1)
  // const [margin, setMargin] = useState(0)
  const fileInput = useRef()

  const ImageProcess = async (e) => {
    props.controlState('loading')
    e.preventDefault();
    const send = await sendImage(e)
  }
  const sendImage = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].files[0])

    
    const send = await axios({
      method: 'POST',
      url: 'http://34.64.255.206:8000/images/process/' ,
      // url: 'http://127.0.0.1:8000/images/process/', 
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {'img': e.target[0].files[0]}
    })
    .then(res => {
      console.log(res)
      // setSeed(res.data.seed)
      props.makeSeed(res.data.seed)
      props.controlState('pcd')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const setImageFile = (e) => {
    const imageFile = e.target.files[0]
    setImage(URL.createObjectURL(imageFile))
    setFile(imageFile)
    setSelect('none')
    setSend('flex')
    props.setScroll()
    // setMargin('10vw')
  }

  const selectOtherImage = (e) => {
    setImage('')
    setFile('')
    setSelect('flex')
    setSend('none')
    fileInput.current.value = ""
  }

  return (
    <s.sendImageBackground>
      { file === ''
        ?
        <s.imageSendTextDiv>
          <s.imageSendText>
            PUT
          </s.imageSendText>
          <s.imageSendText>
            YOUR
          </s.imageSendText>
          <s.imageSendText>
            PANORAMA
          </s.imageSendText>
          <s.imageSendText>
            IMAGE
          </s.imageSendText>
        </s.imageSendTextDiv>
        :
        <s.imageSendTextDiv>
          <s.imageSendText>
            CHECK
          </s.imageSendText>
          <s.imageSendText>
            YOUR
          </s.imageSendText>
          <s.imageSendText>
            IMAGE
          </s.imageSendText>
          <s.imageSendText>
            RIGHT
          </s.imageSendText>
        </s.imageSendTextDiv>
      }

    { file === ''
      ? null
      : 
      <s.imageCheckDiv>
        <s.imageCheckImage src={image} />
      </s.imageCheckDiv>
    }

      <s.imageSelectForm onSubmit={(e) => ImageProcess(e)}>

        <s.imageSelectLabel for="sendBtn" select={select}>
          <s.imageSelectLabelText>
            HERE
          </s.imageSelectLabelText>
        </s.imageSelectLabel>
        <s.imageSelectBtn accept=".gif, .jpg, .png" onChange={(e) => setImageFile(e)} id='sendBtn' type="file" multiple="multiple" ref={fileInput} />

        <s.imageSendLabel for="submitBtn" send={send}>
          <s.imageSendLabelText>
            MAKE
          </s.imageSendLabelText>
          <s.imageSendLabelText>
            POINT
          </s.imageSendLabelText>
          <s.imageSendLabelText>
            CLOUD
          </s.imageSendLabelText>
        </s.imageSendLabel>
        <s.imageSubmitBtn id='submitBtn' type="submit" />
        
        <s.selectOtherDiv send={send} onClick={e => selectOtherImage(e)}>
          <s.selectOtherDivText>
            SELECT
          </s.selectOtherDivText>
          <s.selectOtherDivText>
            OTHER
          </s.selectOtherDivText>
          <s.selectOtherDivText>
            IMAGE
          </s.selectOtherDivText>
        </s.selectOtherDiv>
      </s.imageSelectForm>

      {/* { pcd === false
        ? null
        : <ShowPcd seed={seed} />
      } */}
    </s.sendImageBackground>

  )
}
