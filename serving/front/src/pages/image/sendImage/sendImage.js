import React, {useEffect, useState} from 'react'
import * as s from "./sendImage_css";
import axios from 'axios';
import ShowPcd from '../ShowPcd'

export default function SendImage(props) {
  const [file, setFile] = useState('')
  const [image, setImage] = useState('')
  const [select, setSelect] = useState('flex')
  const [send, setSend] = useState('none')
  const [depth, setDepth] = useState(false)
  const [pcd, setPcd] = useState(false)
  // const [margin, setMargin] = useState(0)

  const ImageProcess = async (e) => {
    e.preventDefault();
    const send = await sendImage(e)
    const loadD = await loadDepth()
    const loadP = await loadPcd()
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
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})
  }

  const loadDepth = async () => {
    const loadD = await axios({
      method: 'GET',
      url: 'http://34.64.255.206:8000/images/send/depth/',
      // url: 'http://127.0.0.1:8000/images/send/depth/', 
    })
    .then(res => {
      console.log(res)
      setDepth(true)
    })
    .catch(err => {console.log(err)})
  }

  const loadPcd = async () => {
    const loadP = await axios({
      method: 'GET',
      url: 'http://34.64.255.206:8000/images/send/pcd/',
      // url: 'http://127.0.0.1:8000/images/send/pcd/', 
    })
    .then(res => {
      console.log(res)
      setPcd(true)
    })
    .catch(err => {console.log(err)})
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
          HERE
        </s.imageSelectLabel>
        <s.imageSelectBtn onChange={(e) => setImageFile(e)} id='sendBtn' type="file" multiple="multiple" />

        <s.imageSendLabel for="submitBtn" send={send}>
          HERE
        </s.imageSendLabel>
        <s.imageSubmitBtn id='submitBtn' type="submit" />
        
      </s.imageSelectForm>

      { pcd === false
        ? null
        : <ShowPcd />
      }
    </s.sendImageBackground>

  )
}
