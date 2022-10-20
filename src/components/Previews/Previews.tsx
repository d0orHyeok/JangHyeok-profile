import React, { useEffect, useRef } from 'react'
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

  const handleClickMove =
    (direction: 'left' | 'right') =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
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
      console.log(moveLeft, scrollWidth)

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
    }

  useEffect(() => {
    const leftBtn = leftBtnRef.current as HTMLButtonElement
    const rightBtn = rightBtnRef.current as HTMLButtonElement
    leftBtn.style.display = 'none'
    if (!items || items.length < 2) {
      rightBtn.style.display = 'none'
    }
  }, [items])

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
