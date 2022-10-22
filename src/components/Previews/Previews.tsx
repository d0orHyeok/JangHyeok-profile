import React, { useCallback, useEffect, useRef } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import * as S from './Previews.styled'

interface PreviewProps {
  items: {
    title: string
    link: string
  }[]
}

const Previews = ({ items }: PreviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rightBtnRef = useRef<HTMLButtonElement>(null)
  const leftBtnRef = useRef<HTMLButtonElement>(null)

  const moveSlide = useCallback((direction: 'left' | 'right') => {
    const container = containerRef.current as HTMLDivElement
    const item = container.getElementsByClassName('preview-item')?.item(0)
    if (!item) return
    const { width } = item.getBoundingClientRect()
    const move = direction === 'left' ? -width : width
    const { scrollLeft, scrollWidth } = container
    const etc = scrollLeft % move
    const moveLeft =
      etc === 0
        ? scrollLeft + move
        : direction === 'right'
        ? scrollLeft - etc + 2 * move
        : scrollLeft - etc + move
    container.scrollTo({ behavior: 'smooth', left: moveLeft })

    const leftBtn = leftBtnRef.current as HTMLButtonElement
    const rightBtn = rightBtnRef.current as HTMLButtonElement

    if (moveLeft <= 0) {
      leftBtn.style.display = 'none'
      rightBtn.style.display = 'block'
    } else if (moveLeft + width >= scrollWidth) {
      leftBtn.style.display = 'block'
      rightBtn.style.display = 'none'
    } else {
      leftBtn.style.display = 'block'
      rightBtn.style.display = 'block'
    }
  }, [])

  const handleClickMove = useCallback(
    (direction: 'left' | 'right') =>
      (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        moveSlide(direction)
      },
    [moveSlide]
  )

  useEffect(() => {
    const leftBtn = leftBtnRef.current as HTMLButtonElement
    const rightBtn = rightBtnRef.current as HTMLButtonElement
    leftBtn.style.display = 'none'
    if (!items || items.length < 2) {
      rightBtn.style.display = 'none'
    }
  }, [items])

  useEffect(() => {
    const leftBtn = leftBtnRef.current as HTMLButtonElement
    const rightBtn = rightBtnRef.current as HTMLButtonElement

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        moveSlide('left')
        leftBtn.classList.add('press')
      } else if (event.key === 'ArrowRight') {
        moveSlide('right')
        rightBtn.classList.add('press')
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        leftBtn.classList.remove('press')
      } else if (event.key === 'ArrowRight') {
        rightBtn.classList.remove('press')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [moveSlide])

  return (
    <S.PreviewWrapper>
      <S.MoveButton
        ref={leftBtnRef}
        className="left"
        onClick={handleClickMove('left')}
      >
        <FaChevronLeft />
      </S.MoveButton>
      <S.MoveButton
        ref={rightBtnRef}
        className="right"
        onClick={handleClickMove('right')}
      >
        <FaChevronRight />
      </S.MoveButton>
      <S.PreviewContainer ref={containerRef}>
        {items?.map((item, index) => (
          <div key={index} className="preview-item">
            <h3 className="item-title">{item.title}</h3>
            <img src={item.link} alt="" />
          </div>
        ))}
      </S.PreviewContainer>
    </S.PreviewWrapper>
  )
}

export default Previews
