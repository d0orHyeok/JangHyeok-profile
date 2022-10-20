import styled from 'styled-components'

export const PreviewWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: calc(600px + 4rem);
  width: 100%;
  padding: 2rem;
  transform: translate(-50%, -50%);
`

export const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  & .preview-item {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;

    & .item-title {
      color: white;
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    & img {
      flex-shrink: 0;
      width: 100%;
    }
  }
`

export const MoveButton = styled.button`
  position: absolute;
  z-index: 10;
  background-color: inherit;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: ease 0.2s all;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  & svg {
    height: 20px;
  }

  &.left {
    left: 2rem;
  }

  &.right {
    right: 2rem;
  }
`
