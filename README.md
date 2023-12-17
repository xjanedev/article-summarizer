## About Project

### Article Summerizer
- Article Summerizer는 Rapid API를 활용하여 긴 기사를 명확하고 간결한 요약문으로 변환하는 기능을 제공하는 웹 서비스 입니다. <br />
  사용자는 웹사이트의 URL을 입력함으로써 원하는 기사를 쉽게 추출하고 그 내용을 요약할 수 있습니다.


## Tech steck

<div display=flex >
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/redux-714bb6?style=for-the-badge&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>

## Demo

<br />

<p align="center">  <img src="https://github.com/xjanedev/article-summarizer/assets/127685269/0c0575e6-72f3-4842-b66d-ba76880a0b1a" align="center" width="40%">  <img src="https://github.com/xjanedev/article-summarizer/assets/127685269/8128a2dc-92f0-41de-9f17-4fa093547c28" align="center" width="40%">
</p>

<br />
<br />




## Highlights

| feature                     | description                                                                  |
| --------------------------- | ---------------------------------------------------------------------------- |
| Redux Toolkit 활용         | Redux Toolkit를 활용하여 데이터 전역관리                                         |
| Open API 활용          | Text Summarization API를 활용하여 아티클 요약                                              |
| 아티클 요약          | URL 입력으로 간편하게 기사 요약 |
| 검색 기록 저장 | 이전에 검색한 기록을 저장하고 확인 할 수 있고 각각의 검색기록 삭제와 전체 삭제기능 구현                        |
| URL 복사              | URL을 클립보드에 복사하여 공유하기 쉽도록 구현                             |
| 반응형 지원                 | 반응형 UI로 모바일 최적화                                                    |

<br />


## 프로젝트로 배운 점

**Redux Toolkit을 활용한 경험과 학습**

**1. Redux Toolkit과 기존 리덕스의 차이 이해**

Redux Toolkit은 기존 리덕스의 번거로움과 복잡성을 줄여주었습니다.`createSlice`를 활용하면 리듀서, 액션 생성자, 상태를 간단한 문법으로 한 번에 정의할 수 있어 초기 설정에 드는 번거로움을 크게 줄일 수 있습니다. 이로써, 기존의 리덕스보다 코드 작성에 대한 부담이 덜해졌습니다.

**2. CRUD 기능의 간편한 구현**

Redux Toolkit의 `createSlice`를 적절히 활용하면 비동기 작업을 간단하게 처리할 수 있어, 데이터의 생성, 조회, 업데이트, 삭제와 관련된 로직을 효과적으로 구현할 수 있었습니다. 이를 통해 프로젝트의 핵심 기능을 빠르게 구현할 수 있었습니다.

**3. 코드 가독성 향상과 중복 제거**

`createSlice`를 사용하면 코드의 가독성이 크게 향상됩니다. 리듀서, 액션 생성자, 초기 상태를 한 곳에서 정의하면서 코드 일관성을 유지할 수 있어, 협업 시에도 코드를 더 쉽게 이해할 수 있었습니다. 또한, 불필요한 코드 중복이 사라져 유지보수성이 향상되었습니다.
