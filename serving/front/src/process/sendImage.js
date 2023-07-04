import React from 'react'
import * as s from "./sendImage_css";
import axios from 'axios';

export default function sendImage() {
  const sendImage = async (e) => {
    e.preventDefault();
    console.log(e.target[0].files[0])

    axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/images/process/' ,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {'img': e.target[0].files[0]}
    })
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})
  }

  return (
    <s.sendImageBackground>

      <p>send image!</p>

      <s.imageSendForm onSubmit={(e) => sendImage(e)}>
        <s.imageSendBtn type="file" multiple="multiple" />
        <s.sendSubmitBtn type="submit" />
      </s.imageSendForm>

    </s.sendImageBackground>
  )
}
