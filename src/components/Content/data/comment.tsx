import { Link } from '../Content.styled'

const wave = (
  <>
    {`배포까지 진행해본 두 번째 프로젝트입니다.

TypeScript와 함께 처음으로 Babel, Webpack을 사용해 보았습니다. 기존에 사용해보지 않은 만큼 초기에 프로젝트 환경을 세팅하는데 어려움을 많이 겪기도 하였지만, 적용을 해보니 개발서버와 비교하였을 때 로딩속도가 1.35배 가량 빨라져서 Webpack에 대해서는 확실히 장점을 느낄 수 있었습니다.

CSS-In-JS 방식을 익히기 위해서 styled-components 사용해보았습니다. CSS-In-CSS 방식과 비교했을 때 classname이 겹쳐 다른 스타일에 영향을 주는 것에 대한 고민을 줄여주어 이전보다 빠르게 작업 할 수 있었습니다. ThemeProvider로 공통적인 스타일을 사용하는 것과 props를 직접 전달하여 사용할 수 있는 부분 또한 빠르고 편하게 개발하는 데 도움이 되었습니다.

사용자 인증 방식은 Jwt인증 방식을 사용했습니다. 토큰의 저장은 Refresh token을 http-only cookie에 저장하였고 Access token은 클라이언트 쪽에 저장되었을 경우 탈취될 가능성을 피하기 위해`}
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
사용자 인증을 구현하며 토큰인증 방식에 대해 알아갈 수 있어 좋았습니다. 아쉬운 것으로는 복수의 access token이 발급되었을 경우와 refresh token이 탈취되었을 때 등의 문제들에대해 고민해보지 못한 부분이 아쉬웠습니다. 이러한 부분은 다음에 고민해서 프로젝트에 적용하거나 다음 프로젝트에서 적용해 개선하고자 합니다.

TypeScript로 진행한 두 번째 프로젝트인 만큼 보다 TypeScript를 사용한 개발에 익숙해질 수 있었습니다. 아직도 제네릭을 다루는 부분이나 TypeScript로 미리 type을 확인할 수 있어 주석작성에 신경쓰지 못한 부분이 아쉬웠고 앞으로의 개발에서 신경써야겠다고 느끼게해준 프로젝트였습니다.`}
  </>
)

const piic = (
  <>
    {`TypeScript를 처음으로 사용하며 type, interface 들을 정의하고 사용하는 부분이 미숙하여 초기 개발속도는 더뎠지만 조금씩 익숙해지면서 변수나 함수의 결괏값을 타입으로 편하게 확인하고 자동완성기능을 사용하면서 장점들을 느낄 수 있었습니다.
  
주제를 쇼핑몰로 선정했던 만큼 SEO에 신경 써서 쇼핑몰정보 상품정보 등이 잘 노출되길 바랐고 그에 따라 SSR을 지원해주는 Next.js를 사용하게 되었습니다.
Next.js가 React를 기반으로 하다보니 이질감없이 개발을 할 수 있었고 Next.js 폴더라우팅 기능을 통해 페이지와 API 라우팅을 할 때 편리함을 느낄 수 있었습니다. 처음 Next.js의 사용이다보니 SSR 페이지에서 페이지가 보여지기 전에 데이터를 요청하고 사용자 정보에 따라 페이지를 redirect 하는 과정, Next.js에 내장된 API기능을 사용해 DB와 연결하여 구현하는 과정에서 어려움을 겪기도 했지만 공식문서의 자료를 보고 익히는 것에 오류에 대한 디버깅과정에 보다 익숙해질 수 있어 좋았습니다.

다만 별도의 서버를 두지 않고 Next.js 내장 기능을 통해 서버를 구현한 점과 사용자 인증과정을 NextAuth 라이브러리를 제대로 이해하지 못하고 사용한 것과 해당 라이브러리의 소셜로그인 기능을 사용하지 못한 부분들이 아쉬웠습니다.
  
프로젝트를 돌아보았을 때 가장 아쉬웠던 부분은 사용자 인증을 구현하는 부분이었습니다.
처음에는 Next.js의 API를 사용해 JWT를 사용한 유저인증을 구현하였지만 쿠키가 공유되어 로그인 상태가 공유되었던 치명적인 오류(A 사용자가 로그인했을 때 다른 컴퓨터에서 B 사용자가 접속해도 A 사용자로 로그인되었었음)와 SSR 페이지에서 사용자 인증을 확인하는데 시간이 너무 오래걸리는 문제가 발생했습니다. 위 문제를 해결하려 했지만 결국 해결방안을 찾지 못해 NextAuth 라이브러리를 사용해서 대체 하였습니다. 그 당시에 인증방식에 대해 제대로 알지 못했던 부분과 NextAuth 라이브러리를 잘 활용하지 못한부분(ex:소셜로그인 기능)이 아쉬움에 남습니다.`}
  </>
)

export { wave, piic }
