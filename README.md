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

![스크린샷 2023-12-15 오후 5 52](https://github.com/xjanedev/article-summarizer/assets/127685269/0c0575e6-72f3-4842-b66d-ba76880a0b1a)
![스크린샷 2023-12-15 오후 5 51](https://github.com/xjanedev/article-summarizer/assets/127685269/8128a2dc-92f0-41de-9f17-4fa093547c28)



## Highlights

| feature                     | description                                                                  |
| --------------------------- | ---------------------------------------------------------------------------- |
| Redux Toolkit 활용         | Redux Toolkit를 활용하여 데이터 전역관리                                         |
| Open API 활용          | Text Summarization API를 활용하여 아티클 요약                                              |
| 아티클 요약          | URL 입력으로 간편하게 기사 요약 |
| 검색 기록 저장 | 이전에 검색한 기록을 저장하고 확인 할 수 있고 각각의 검색기록 삭제와 전체 삭제기능 구현                        |
| URL 복사              | URL을 클립보드에 복사하여 공유하기 쉽도록 구현                             |
| 반응형 지원                 | 반응형 UI로 모바일 최적화                                                    |


## 프로젝트로 배운 점

**Redux Toolkit로 상태관리**

**`useLazyGetSummaryQuery` 활용**

프로젝트를 통해 `useLazyGetSummaryQuery`를 적극적으로 활용하는 과정에서 여러 가지 중요한 개념과 기술적인 측면에서 많은 것을 배울 수 있었습니다.

#### **효율적인 네트워크 사용의 중요성 이해:**
`useLazyGetSummaryQuery`를 통해 API 호출을 필요한 시점까지 지연시키는 방법을 배우면서, 네트워크 사용의 효율성이 얼마나 중요한지 깨닫게 되었습니다. 사용자 경험을 향상시키고 불필요한 데이터 호출을 최소화함으로써 어플리케이션의 성능을 향상시킬 수 있는 방법을 익힐 수 있었습니다.

#### **자동 캐싱 및 상태 관리의 편리성 이해:**
내부적으로 자동 캐싱 및 상태 관리가 처리되는 `useLazyGetSummaryQuery`를 사용함으로써, 동일한 요청이 여러 번 호출될 때 성능을 최적화하고 불필요한 API 요청을 방지할 수 있다는 것을 알게 되었습니다. 이는 애플리케이션의 효율성을 높이고 불필요한 자원 소모를 최소화하는 데 큰 도움이 됩니다.

#### **상태 업데이트 자동 처리의 효과적인 활용:**
`useLazyGetSummaryQuery`를 사용하면 API 호출 중 발생하는 로딩 상태나 에러와 같은 다양한 상태 업데이트를 자동으로 처리할 수 있음을 경험했습니다. 이는 사용자에게 로딩 상태를 시각적으로 제공하고 오류를 적절히 처리함으로써 더 나은 사용자 경험을 제공할 수 있음을 깨달았습니다.

#### **간결한 코드 및 통합성의 가치 이해:**
`useLazyGetSummaryQuery`를 통해 API 호출과 상태 관리가 통합되어 코드가 간결해지는 경험을 했습니다. Redux Toolkit Query의 통합성은 전체적인 코드베이스의 가독성을 향상시키고, Redux 스토어를 통한 상태 관리의 용이성을 제공함을 이해했습니다.
