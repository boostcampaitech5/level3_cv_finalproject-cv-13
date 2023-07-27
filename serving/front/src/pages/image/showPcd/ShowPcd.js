import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PCDLoader } from 'three-stdlib'
import * as s from "./ShowPcd_css";
import { useState, useEffect } from "react"
import axios from 'axios';

function Stars(props) {
  const [star, setStar] = useState(3)
  const [star1, setStar1] = useState(`${process.env.PUBLIC_URL}/fill_star.png`)
  const [star2, setStar2] = useState(`${process.env.PUBLIC_URL}/fill_star.png`)
  const [star3, setStar3] = useState(`${process.env.PUBLIC_URL}/fill_star.png`)
  const [star4, setStar4] = useState(`${process.env.PUBLIC_URL}/empty_star.png`)
  const [star5, setStar5] = useState(`${process.env.PUBLIC_URL}/empty_star.png`)
  const setStars = [setStar1, setStar2, setStar3, setStar4, setStar5]

  const StarNum = (num) => {
    for (let i=0; i<5; i++) {
      if (i+1 <= num) {
        setStars[i](`${process.env.PUBLIC_URL}/fill_star.png`)
      } else {
        setStars[i](`${process.env.PUBLIC_URL}/empty_star.png`)
      }
    }
  }

  const ResetStar = () => {
    console.log('out');
    for (let i=0; i<5; i++) {
      if (i+1 <= star) {
        setStars[i](`${process.env.PUBLIC_URL}/fill_star.png`)
      } else {
        setStars[i](`${process.env.PUBLIC_URL}/empty_star.png`)
      }
    }
  }
  return (
    <>
      <s.Star src={star1}
      onMouseEnter={() => StarNum(1)}
      onMouseLeave={() => ResetStar()}
      onClick={() => {
        setStar(1)
        props.starNum(1)
        }} />
      <s.Star src={star2}
      onMouseEnter={() => StarNum(2)}
      onMouseLeave={() => ResetStar()}
      onClick={() => {
        setStar(2)
        props.starNum(2)
        }} />
      <s.Star src={star3}
      onMouseEnter={() => StarNum(3)}
      onMouseLeave={() => ResetStar()}
      onClick={() => {
        setStar(3)
        props.starNum(3)
        }} />
      <s.Star src={star4}
      onMouseEnter={() => StarNum(4)}
      onMouseLeave={() => ResetStar()}
      onClick={() => {
        setStar(4)
        props.starNum(4)
        }} />
      <s.Star src={star5}
      onMouseEnter={() => StarNum(5)}
      onMouseLeave={() => ResetStar()}
      onClick={() => {
        setStar(5)
        props.starNum(5)
        }} />
    </>
  )
}

function Points(props) {
  // const points = useLoader(PCDLoader, `img_dir/temp_pcd_${props.seed}.pcd`)
  const points = useLoader(PCDLoader, 'temp_1.pcd')

  return <primitive object={points} {...props} />
}

export default function ShowPcd(props) {
  const [pointSize, setPointSize] = useState(0)
  const [accStar, setAccStar] = useState(3)
  const [serStar, setSerStar] = useState(3)
  useEffect(() => {
    console.log(accStar);
    console.log(serStar);
  }, [accStar, serStar])

  const ChangeAccStar = (e) => {
    setAccStar(e)
  }

  const ChangeSerStar = (e) => {
    setSerStar(e)
  }

  const SendReview = () => {
    axios({
      method: 'POST',
      url: 'http://34.64.255.206:8000/images/review/',
      // url: 'http://127.0.0.1:8000/images/review/', 

      data: {
        'image_path': `temp_pcd_${props.seed}.pcd`,
        'acc_star': accStar,
        'ser_star': serStar
      }
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const sizeUp = (e) => {
    setPointSize(pointSize + 0.01)
  }

  const sizeDown = (e) => {
    if (pointSize > 0) {
      setPointSize(pointSize - 0.01)
    }
  }
  return (
    <s.ShowPcdBackground>
      <s.ReviewDiv>
        <s.ReivewTextDiv>
          <s.ReviewTopText>
            Will You Rating Us?
          </s.ReviewTopText>
          <s.ReviewText>
            How close is the image to the actual room?
          </s.ReviewText>
          <s.ReviewStarDiv>
            <Stars starNum={ChangeAccStar} />
          </s.ReviewStarDiv>

          <s.ReviewText>
            How was the service provided?
          </s.ReviewText>
          <s.ReviewStarDiv>
            <Stars starNum={ChangeSerStar} />
          </s.ReviewStarDiv>
          <s.Submit onClick={() => SendReview()}>
            <s.SubmitText>
              SUBMIT
            </s.SubmitText>
          </s.Submit>
        </s.ReivewTextDiv>
      </s.ReviewDiv>
      <s.PointSizeDiv>
        <s.PointSizeTextDiv>
          <s.TopPointSizeText>
            Dot
          </s.TopPointSizeText>
          <s.TopPointSizeText>
            Size
          </s.TopPointSizeText>
          <s.TopPointSizeText>
            Control
          </s.TopPointSizeText>
        </s.PointSizeTextDiv>
        
        <s.PointSizeUpBtn onClick={() => sizeUp()}>
          <s.PointSizeText>
            +
          </s.PointSizeText>
        </s.PointSizeUpBtn>
        <s.PointSizeDownBtn onClick={() => sizeDown()}>
          <s.PointSizeText>
            -
          </s.PointSizeText>
        </s.PointSizeDownBtn>
        <s.PointSizeViewDiv>
          <s.PointSizeText>
            {Math.round(pointSize*100)/100}
          </s.PointSizeText>
        </s.PointSizeViewDiv>
      </s.PointSizeDiv>
      <s.ExampleImageDiv>
        <Canvas
        camera={{ position: [3, 2, 0]}}>
          <Points seed={props.seed} rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={pointSize} material-color="white" />
          <OrbitControls autoRotate={true}/>
        </Canvas>
      </s.ExampleImageDiv>

    </s.ShowPcdBackground>
  )
}