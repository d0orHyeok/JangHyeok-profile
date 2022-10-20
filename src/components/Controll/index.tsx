import React, { useCallback } from 'react'
import styled from 'styled-components'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Fixbox = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`

const UpButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  padding: 0;
  background-color: #e8e8e8;
  border: none;
  cursor: pointer;
  transition: ease 0.2s all;
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 6px, rgb(0 0 0 / 25%) 0px 8px 30px,
    rgb(255 255 255 / 30%) 0px 0px 0px 1px inset;

  & .icon-up {
    font-size: 1.6rem;
  }

  &:hover {
    background-color: #d6d6d6;
  }

  &:active {
    background-color: #a6a6a6;
    color: whitesmoke;
  }
`

const Controll = () => {
  const handleClickGoUp = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <Fixbox>
      <UpButton onClick={handleClickGoUp}>
        <AiOutlineArrowUp className="icon-up" />
      </UpButton>
    </Fixbox>
  )
}

export default Controll
