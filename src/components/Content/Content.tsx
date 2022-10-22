import { wave, piic } from '@components/Content/data/comment'
import React, { useState } from 'react'
import * as S from './Content.styled'
import { ProjectLinks, ProjectStacks } from './sections/ProjectItem'
import Details from '@components/Details'
import { MdImageSearch } from 'react-icons/md'
import Modal from '@components/Modal'
import Previews from '@components/Previews/Previews'
import { preview_piic, preview_wave } from '@components/Content/data/preview'

type OpenModalType = 'wave' | 'piic' | undefined | null

const Content = () => {
  const [open, setOpen] = useState<OpenModalType>(null)

  return (
    <>
      <Modal open={Boolean(open)} onClose={() => setOpen(null)}>
        <Previews items={open === 'wave' ? preview_wave : preview_piic} />
      </Modal>
      <S.Projects>
        <S.H1 data-aos="fade-in">Projects.</S.H1>
        <article className="project" data-aos="fade-in">
          <h2 className="project-title project-title-flex">
            Wave
            <S.PreviewButton
              title="미리보기"
              style={{ marginLeft: '1rem' }}
              onClick={() => setOpen('wave')}
            >
              <MdImageSearch />
            </S.PreviewButton>
          </h2>
          <p className="project-desc">{`음악공유 스트리밍 사이트, 개인프로젝트`}</p>
          <div className="project-contents">
            <div className="project-content-item">
              <Details summary="구현 사항" default={true}>
                <S.BulletUl>
                  <li>
                    {`각종 페이지 구현 (회원가입, 메인, 세팅, 차트, 프로필, 음악 & 플레이리스트 조회, 히스토리, 태그 조회, 검색, 음악 업로드)`}
                  </li>
                  <li>
                    {`Redux, 자주 수정요청이 일어나는 유저 정보(업데이트, 좋아요, 팔로우 등)와 음악 스트리밍을 위한 음악플레이어 상태관리`}
                  </li>
                  <li>
                    <S.Link
                      href="https://github.com/d0orHyeok/Wave/blob/master/client/src/routes/router.tsx#L26-L62"
                      target="_blank"
                    >
                      페이지 변경 시 이전페이지의 fetch 요청 abort 기능
                    </S.Link>
                  </li>
                  <li>
                    API 및 JWT를 사용한 사용자 인증, 이메일을 통한 일회성 인증
                    구현
                  </li>
                  <li>Firebase storage를 통한 업로드 파일 관리</li>
                </S.BulletUl>
              </Details>
              <Details summary="프로젝트 회고">{wave}</Details>
            </div>
            <ProjectLinks
              className="project-content-item"
              github="https://github.com/d0orHyeok/Wave"
              demo="https://wave-d0orhyeok.netlify.app/"
            />
            <ProjectStacks
              items={[
                'TypeScript, ESLint, Prettier',
                'Front-end - React, Redux, Styled-compononets, Webpack, Babel',
                'Back-end - Nest.js, TypeORM, PostgreSQL, Firebase',
                'Deployment - Heroku, Netlify',
              ]}
            />
          </div>
        </article>
        <article className="project" data-aos="fade-in">
          <h2 className="project-title project-title-flex">
            PIIC
            <S.PreviewButton
              title="미리보기"
              style={{ marginLeft: '1rem' }}
              onClick={() => setOpen('piic')}
            >
              <MdImageSearch />
            </S.PreviewButton>
          </h2>
          <p className="project-desc">{`쇼핑몰 사이트, 개인프로젝트`}</p>
          <div className="project-contents">
            <div className="project-content-item">
              <Details summary="구현 사항" default={true}>
                <S.BulletUl>
                  <li>
                    {`각종 페이지 구현 (회원가입, 메인, 상품 검색 및 조회, 장바구니 & 위시리스트, 구매, 마이페이 지, 주문조회 및 상세조회)`}
                  </li>
                  <li>{`상품 추가, 수정, 제거가 가능한 관리자 페이지 구현`}</li>
                  <li>
                    {`Redux, 자주 수정요청이 일어나는 유저 정보 상태관리 (업데이트, 위시리스트, 장바구니 등)`}
                  </li>
                  <li>
                    <S.Link
                      href="https://github.com/d0orHyeok/next-shopping/blob/master/components/OrderPage/section/Payment.jsx"
                      target="_blank"
                    >
                      부트페이를 사용한 결제요청
                    </S.Link>
                  </li>
                  <li>
                    API 및{' '}
                    <S.Link
                      href="https://github.com/d0orHyeok/next-shopping/blob/master/pages/api/payment/validation.ts"
                      target="_blank"
                    >
                      부트페이 결제 검증 구현
                    </S.Link>
                  </li>
                </S.BulletUl>
              </Details>
              <Details summary="프로젝트 회고">{piic}</Details>
            </div>
            <ProjectLinks
              className="project-content-item"
              github="https://github.com/d0orHyeok/next-shopping"
              demo="https://next-shopping-seven.vercel.app/"
            />
            <ProjectStacks
              items={[
                'TypeScript, Next.js, Redux, MongoDB, ESLint, Prettier',
                'Deployment - Vercel',
              ]}
            />
          </div>
        </article>
        <article className="project" data-aos="fade-in">
          <h2 className="project-title">Simple JavaScript Projects</h2>
          <p className="project-desc">
            {`JavaScript 와 HTML/CSS로 만든 프로젝트들 모음`}
          </p>
          <div className="project-contents">
            <ProjectLinks
              className="project-content-item"
              demo="https://d0orhyeok.github.io/Simple-js-project/"
              github="https://github.com/d0orHyeok/Simple-js-project"
            />
            <ProjectStacks
              items={['JavaScript, HTML/CSS', 'Deployment - GithubPage']}
            />
          </div>
        </article>
        <article className="project" data-aos="fade-in">
          <h2 className="project-title">포트폴리오 페이지</h2>
          <div className="project-contents">
            <ProjectLinks
              className="project-content-item"
              demo="https://d0orhyeok.github.io/JangHyeok-profile/"
              github="https://github.com/d0orHyeok/JangHyeok-profile"
            />
            <ProjectStacks
              items={[
                'TypeScript, styled-components, Webpack, Babel, Prettier, ESLint',
                'Deployment - GithubPage',
              ]}
            />
          </div>
        </article>
      </S.Projects>
      <S.Skill data-aos="fade-in">
        <S.H1>Skill.</S.H1>
        <S.BulletUl className="list-badge">
          <li>
            <span className="label">Front-end</span>
            <div className="items">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                alt="HTML5"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                alt="CSS3"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"
                alt="JavaScript"
              />
              <img
                src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"
                alt="React"
              />
              <img
                src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"
                alt="Next.js"
              />
              <img
                src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
                alt="Redux"
              />
              <img
                src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"
                alt="styled-components"
              />
            </div>
          </li>
          <li>
            <span className="label">Back-end</span>
            <div className="items">
              <img
                src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"
                alt="Node.js"
              />
            </div>
          </li>
          <li>
            <span className="label">Database</span>
            <div className="items">
              <img
                src="https://img.shields.io/badge/MongoBD-47A248?style=flat-square&logo=MongoBD&logoColor=white"
                alt="MongoBD"
              />
              <img
                src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white"
                alt="PostgreSQL"
              />
            </div>
          </li>
        </S.BulletUl>
      </S.Skill>
      <S.Section data-aos="fade-in">
        <S.H1>Education.</S.H1>
        <div>2015. 03. - 2020. 12. 제주대학교 컴퓨터교육과 휴학</div>
      </S.Section>
    </>
  )
}

export default Content
