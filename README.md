# level3_cv_finalproject-cv-13



## Model Pretrained
---
https://drive.google.com/file/d/1T-T8HMRLuEol7k7DLsyzBx2YI5xf_32W/view?usp=sharing

## 🏚project architecture

> CI/CD 는 Jenkins 로 관리하였고 github 에 분리해둔 front, back, ai 브랜치가 각각 push 될때마다 해당 server 를 자동으로 배포하게 하는 방식으로 진행하였습니다.
> 

![프로젝트 청사진.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/45d2483c-daac-48a1-bb07-b7940e2b797b/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B2%AD%EC%82%AC%EC%A7%84.png)

### Data Flow

## Directory
```bash
└─level3_cv_finalproject-cv-13
    ├─model
    │  ├─ai_server
    │  │  └─__pycache__
    │  ├─images
    │  │  ├─migrations
    │  │  │  └─__pycache__
    │  │  └─__pycache__
    │  ├─inference
    │  │  ├─config
    │  │  │  ├─mp3d_depth
    │  │  │  │  └─ablation
    │  │  │  ├─mp3d_layout
    │  │  │  ├─s2d3d_depth
    │  │  │  └─s2d3d_sem
    │  │  ├─data
    │  │  ├─lib
    │  │  │  ├─dataset
    │  │  │  ├─misc
    │  │  │  └─model
    │  │  │     ├─backbone
    │  │  │     ├─horizon_compression
    │  │  │     ├─horizon_refinement
    │  │  │     ├─horizon_upsample
    │  │  │     └─modality
    │  │  ├─misc
    │  │  └─result
    │  │     ├─aligned
    │  │     ├─depth
    │  │     └─pcd
    │  └─static
    ├─serving
    │  ├─back
    │  │  ├─back
    │  │  └─images
    │  │     └─migrations
    │  └─front
    │     ├─public
    │     └─src
    │        ├─design
    │        ├─fonts
    │        ├─pages
    │        │  ├─about
    │        │  │  └─item
    │        │  ├─home
    │        │  ├─image
    │        │  │  ├─load_page
    │        │  │  ├─sendImage
    │        │  │  └─showPcd
    │        │  └─main
    │        └─ui
    └─utility
```
