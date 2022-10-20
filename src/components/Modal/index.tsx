import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const ModalWrapper = styled.div`
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1200;

  & .modal-content {
  }

  & .modal-backdrop {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    z-index: -1;
  }
`

const CloseBtn = styled(AiOutlineCloseCircle)`
  z-index: 1500;
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: inherit;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
`

interface ModalProps {
  open?: boolean
  onClose?: (...args: any[]) => void
  children: React.ReactNode
  disableScrollLock?: boolean
}

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  return createPortal(
    <>{children}</>,
    document.getElementById('root') as HTMLElement
  )
}

const Modal = ({ open, onClose, children, disableScrollLock }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  // 외부 클릭 및 esc입력시 닫기
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose?.()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (modalRef.current && event.key === 'Escape') {
        onClose?.()
      }
    }
    window.addEventListener('mousedown', handleClick)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mousedown', handleClick)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  // 모달 스크롤 방지
  useEffect(() => {
    const $body = document.querySelector('body') as HTMLBodyElement
    $body.style.overflow = !disableScrollLock && open ? 'hidden' : 'auto'
    return () => {
      $body.style.overflow = 'auto'
    }
  }, [disableScrollLock, open])

  return (
    <ModalContainer>
      {open ? <CloseBtn onClick={() => onClose?.()} /> : null}
      <ModalWrapper
        style={{ zIndex: open ? 1200 : -1200 }}
        className="modal-presentation"
      >
        {open ? (
          <div ref={modalRef} className="modal-content">
            {children}
          </div>
        ) : null}
        <div className="modal-backdrop" style={{ opacity: open ? 1 : 0 }}></div>
      </ModalWrapper>
    </ModalContainer>
  )
}

export default Modal
