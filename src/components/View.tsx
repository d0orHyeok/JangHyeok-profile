import React from 'react'
import styled from 'styled-components'
import AOS from './AOS'
import Content from './Content/Content'
import Controll from './Controll'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Wrapper = styled.section`
  padding-top: 4rem;
  display: flex;
  justify-content: center;

  & .main-content {
    max-width: 100%;
    width: 100%;
    line-height: 1.5;
    z-index: 4;
    padding: 0 62px;
  }
`

const View = () => {
  return (
    <>
      <AOS />
      <Header />
      <Wrapper>
        <main style={{ maxWidth: '100%', minWidth: '0px', width: '1024px' }}>
          <div className="main-content">
            <Content />
          </div>
        </main>
      </Wrapper>
      <Footer />
      <Controll />
    </>
  )
}

export default View
