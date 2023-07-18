import React, {useEffect, useState} from 'react'
import * as s from "./sendImage_css";
import axios from 'axios';

export default function SendImage(props) {
  const [file, setFile] = useState('')
  const [image, setImage] = useState('')
  const [select, setSelect] = useState('flex')
  const [send, setSend] = useState('none')
  // const [margin, setMargin] = useState(0)

  const sendImage = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].files[0])

    axios({
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

      {/* <s.imageSelectForm onSubmit={(e) => sendImage(e)} margin={margin}> */}
      <s.imageSelectForm>

        <s.imageSelectLabel for="sendBtn" select={select}>
          HERE
        </s.imageSelectLabel>

        <s.imageSelectBtn onChange={(e) => setImageFile(e)} id='sendBtn' type="file" multiple="multiple" />

        <s.imageSendLabel for="submitBtn" send={send}>
          HERE
        </s.imageSendLabel>

        <s.imageSubmitBtn id='submitBtn' type="submit" />
        
      </s.imageSelectForm>

    </s.sendImageBackground>
  )
}
