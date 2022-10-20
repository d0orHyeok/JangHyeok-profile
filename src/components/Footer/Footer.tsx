import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 6rem 0;
  font-size: 0.8rem;

  & div {
    text-align: center;
    color: gray;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div>Copyright 2022. JangHyeok Kim all rights reserved.</div>
    </StyledFooter>
  )
}

export default Footer
