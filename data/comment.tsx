import styled from 'styled-components'

const Link = styled.a`
  color: gray;
  transition: ease opacity 0.1s;

  &:hover {
    opacity: 0.6;
  }
`

const wave = (
  <>
    {`배포까지 진행해본 두 번째 프로젝트입니다.

TypeScript와 함께 처음으로 Babel, Webpack을 사용해 보았습니다. 기존에 사용해보지 않은 만큼 초기에 프로젝트 환경을 세팅하는데 어려움을 많이 겪기도 하였지만, 적용을 해보니 개발서버와 비교하면 로딩속도가 1.4배 정도 빨라진 것을 느낄 수 있어 Webpack에 대해서는 확실히 장점을 느낄 수 있었습니다.

본 프로젝트에서는 styled-components 또한 처음으로 사용해보았는데 확실히 다른 파일과 변수명이 겹쳐 영향을 끼치는 걱정을 안 하고 ThemeProvider로 공통적인 스타일을 사용하는 것과 props를 직접 전달하여 사용할 수 있는 부분들이 더 빠르고 편하게 개발하는 데 도움이 되었습니다. 다만 전체적인 페이지 스타일링에 있어 버튼들이나 padding, margin 등의 스타일들에도 theme을 사용하지 못한 부분이 아쉬웠습니다.

Redux state로 사용한 데이터들은 대부분 컴포넌트에 영향을 주는 유저정보와 음악플레이어의 상태를 관리하는 데 사용하였습니다.

유저 인증방식은 Jwt인증 방식을 사용하여 클라이언트에서 로그인을 진행하면 access token과 refresh token을 서버로부터 받아오고 refresh token은 http-only 쿠키로 access token은 `}
    {
      <Link
        href="https://github.com/d0orHyeok/wave-client-production/blob/master/src/api/Axios.ts#L61"
        target="_blank"
      >
        axios의 request intercepter
      </Link>
    }
    {`를 통해 header의 Authorization 넣어서 사용하였습니다. access token이 만료되거나 사이트가 새로고침 되어 없는 경우에도 `}
    {
      <Link
        href="https://github.com/d0orHyeok/wave-client-production/blob/master/src/api/Axios.ts#L29"
        target="_blank"
      >
        axios의 response intercepter
      </Link>
    }
    {`으로 refresh token을 사용한 access token을 재발급요청을 하여 인증상태를 유지할 수 있도록 하였습니다.
토큰인증 방식에 대해 알아갈 수 있어 좋았지만, 복수의 access token이 발급되었을 경우와 refresh token이 탈취되었을 때 대한 방비가 부족한 것 등의 부분들은 다음에 개선해 나가고자 합니다.

이번 프로젝트는 TypeScript로 진행한 두 번째 프로젝트인 만큼 보다 TypeScript를 사용한 개발에 익숙해질 수 있었습니다. 그리고 개발에 숙달된 만큼 이전에 신경 쓰지 못했던 반복적으로 작성하던 코드나 컴포넌트를 줄이고 재사용성 있는 컴포넌트를 만드는 것과 파일과 코드의 양이 많은 만큼 코드분석을 위한 주석을 작성하는 부분이 중요하고 앞으로 신경 써야겠다고 생각하게 해준 프로젝트였습니다.`}
  </>
)

const piic = (
  <>
    {`TypeScript와 Next.js를 처음 사용해보았던 프로젝트입니다. 주제를 쇼핑몰로 선정했던 만큼 SEO에 신경 써서 쇼핑몰정보 상품정보 등이 잘 노출되길 바랐고 그에 따라 SSR을 지원해주는 Next.js를 사용하게 되었습니다.

TypeScript, Next.js를 사용한 개발이 처음이다 보니 아무래도 어려움을 많이 겪었던 프로젝트입니다.
  
TypeScript를 사용하며 type, interface 들을 정의하고 파일로 만드는 과정이나 제네릭을 사용하는 부분들이 특히나 어려웠지만 조금씩 익숙해지면서 변수나 함수의 결괏값을 타입으로 편하게 확인하고 자동완성기능을 사용하면서 장점들을 느낄 수 있었습니다.
  
Next·dis를Next.js를 사용하며 편하게 SSR 개발을 진행하고 페이지와 API 라우팅을 할 때 편리함을 느낄 수 있었습니다. SSR 페이지에서 유저 정보에 따라 페이지를 redirect 하는 과정이나 Next.js의 API기능을 사용해 DB와 연동하여 구현하는 것, `}
    {
      <Link
        href="https://github.com/d0orHyeok/next-shopping/blob/master/components/OrderPage/section/Payment.jsx"
        target="_blank"
      >
        {`결제API(부트페이)`}
      </Link>
    }
    {`를 이용한 결제서비스 구현 등의 부분들에서 많은 시행착오를 거쳐 개발하며 실력을 쌓을 수 있어 좋았습니다.
다만 별도의 서버를 두지 않고 Next.js 내장 기능을 통해 서버를 구현한 점과 유저 인증과정을 NextAuth 라이브러리를 제대로 이해하지 못하고 사용한 것과 해당 라이브러리의 소셜로그인 기능을 사용하지 못한 부분들이 아쉬웠습니다.
  
배포과정에서도 많은 문제가 있었지만 크게 두 가지가 기억에 남았습니다.
API서버와 클라이언트가 같이 배포되는 Next.js에서 쿠키가 공유되어 로그인 상태가 공유되었던 치명적인 오류(A 사용자가 로그인했을 때 다른 컴퓨터에서 B 사용자가 접속해도 A 사용자로 로그인되었었음)와 SSR 과정에서 유저 인증을 하는데 소요되는 시간이 10초 이상으로 길어 페이지 접속을 못 했던 것이 가장 고생했던 것들이었습니다. 두 가지 문제 모두 백엔드와도 연관되어있어 미숙해서 생긴 문제이긴 했지만, 보안 측면에서 중요한 인증 관련 부분인 만큼 더욱 알아보고 신경 써서 개발해야겠다고 느끼게 해준 프로젝트였습니다.`}
  </>
)

export { wave, piic }
