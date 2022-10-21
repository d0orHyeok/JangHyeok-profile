import React, { useEffect, useState } from 'react'
import * as S from './Header.styled'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaChevronDown,
} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const introduceText = `반복을 줄이고 응집도를 높여나가는 개발을 좋아합니다.
개발자와 사용자에게 최적의 경험을 전달해주는 것을 지향합니다.`

const Header = () => {
  const [eng, setEng] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setEng((state) => !state)
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  return (
    <S.StyledHeader>
      <div className="backdrop"></div>
      <S.HeaderContainer className="container" data-aos="fade-in">
        <div className="profile">
          <div className="profile-image">
            <img src="https://i.imgur.com/6UvDkMH.jpg" alt="profile" />
          </div>
          <div className="profile-desc">
            <div className="desc-name">
              <span className={eng ? 'fadeout' : 'fadein'}>김 장 혁</span>
              <span className={`italic ${eng ? 'fadein' : 'fadeout'}`}>
                JangHyeok Kim
              </span>
            </div>
            <div className="desc-job">Web Developer / Front-end Developer</div>
            <div className="desc-text">{introduceText}</div>
          </div>
          <div className="profile-contact">
            <ul>
              <li>
                <a
                  title="Github"
                  href="https://github.com/d0orHyeok"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/d0orhyeok-dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  title="Instagram"
                  href="https://www.instagram.com/d0or_hyeok/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  title="Email"
                  href="mailto:d0oR.hyeok@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </div>
          <div className="scroll-down">
            <FaChevronDown className="icon-down" />
          </div>
        </div>
      </S.HeaderContainer>
    </S.StyledHeader>
  )
}

export default Header
