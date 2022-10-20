import styled, { css } from 'styled-components'

export const Section = styled.section`
  font-size: 1rem;
  padding: 2rem 0;

  &:first-child {
    padding-top: 0;
  }
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }

  ${({ theme }) => {
    const { mobile, tablet } = theme.device
    return css`
      ${tablet} {
        font-size: 0.9rem;
      }
      ${mobile} {
        font-size: 0.8rem;
      }
    `
  }}
`

export const H1 = styled.h1`
  ${({ theme }) => {
    const { colors } = theme
    return css`
      font-size: 2em;
      font-weight: bold;
      color: ${colors.primary};
      margin-bottom: 1rem;
    `
  }}
`

export const BulletUl = styled.ul`
  & li::before {
    display: inline-block;
    content: '•';
    width: 1rem;
    text-align: center;
  }

  & li {
    text-indent: -1rem;
    margin-left: 1rem;

    & > * {
      text-indent: 0;
    }
  }
`

export const Skill = styled(Section)`
  & ul.list-badge li {
    & .label {
      font-weight: bold;
    }

    & .items {
      padding: 0.5rem 0;
      & img:not(:last-child) {
        margin-right: 4px;
      }
    }
  }
`

export const Projects = styled(Section)`
  & article.project {
    margin-bottom: 4rem;

    & .project-title {
      font-size: 1.6em;
      font-weight: bold;

      &.project-title-flex {
        display: flex;
        align-items: flex-end;
      }
    }

    & .project-title,
    & .project-desc {
      margin-bottom: 1rem;
    }

    & .project-content-comment {
      margin-bottom: 1rem;
    }
  }
`

export const PreviewButton = styled.button`
  padding: 0;
  width: 1.2em;
  height: 1.2em;
  font-size: 1em;
  color: rgb(57, 99, 157);
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  transition: ease 0.2s all;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(57, 99, 157, 0.1);
  }

  &:active {
    background-color: rgba(57, 99, 157, 0.3);
  }
`
