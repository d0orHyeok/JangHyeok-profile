import React, { useState } from 'react'
import { GrDown } from 'react-icons/gr'
import styled, { css } from 'styled-components'

const CommentBox = styled.div<{ open: boolean }>`
  ${({ open }) =>
    open
      ? css`
          border: 1px solid lightgray;
          border-top: none;
        `
      : null}
  background-color: #e8e8e8;
  padding: ${({ open }) => (open ? '1rem' : '0')};
  color: ${({ open }) => (open ? 'inherit' : '#e8e8e8')};
  transition: ease 0.5s color;
  font-size: 0.9rem;
  white-space: pre-wrap;
`

const Summary = styled.button`
  border: 1px solid lightgray;
  background-color: #e8e8e8;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  & .details-status {
    margin-left: auto;
    transition: ease all 0.2s;
  }
  & .details-status.comment-open {
    transform: rotate(180deg);
  }
`

interface DeatilsProps extends React.HTMLAttributes<HTMLDivElement> {
  summary?: string
}

const Details = ({ summary, children, ...props }: DeatilsProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div {...props}>
      <Summary onClick={() => setOpen((state) => !state)}>
        {summary}
        <GrDown
          className={`details-status comment-${open ? 'open' : 'close'}`}
        />
      </Summary>
      <CommentBox open={open}>{open ? children : null}</CommentBox>
    </div>
  )
}

export default Details
