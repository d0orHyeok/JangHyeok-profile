import { useCallback, useRef } from 'react'

interface OnMoveToElementOption extends ScrollIntoViewOptions {
  element?: Element | null
}

/**
 * 특정 요소로 스크롤을 이동하는데 사용되는것들을 쉽게 가져온다.
 * @returns 이동할 대상요소에 추가할 ref와 마우스 이동 함수를 받는다.
 * @returns onMoveToElement
 * 지정된 요소로 스크롤을 이동시킨다
 * @param {Element} options.element Scroll target element
 * @param options.behavior "smooth" | "auto"
 * @param options.block "center" | "end" | "nearest" | "start"
 * @param options.inline "center" | "end" | "nearest" | "start"
 *
 */
function useElementScroll() {
  const elRef = useRef<HTMLElement>(null)

  const onMoveToElement = useCallback((options?: OnMoveToElementOption) => {
    if (!options) {
      elRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      const { element, behavior, block, inline } = options
      const target = !element ? elRef.current : element
      target?.scrollIntoView({
        behavior: behavior || 'smooth',
        block: block || 'start',
        inline,
      })
    }
  }, [])

  return { ref: elRef, onMoveToElement }
}

export default useElementScroll
