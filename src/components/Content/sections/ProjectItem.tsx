import styled from 'styled-components'
import React from 'react'
import { FiLink2 } from 'react-icons/fi'
import { BulletUl } from '../Content.styled'
import { RiStackFill } from 'react-icons/ri'

const ProjectItem = styled.div`
  display: flex;
  align-items: flex-start;

  & .item-name {
    flex-shrink: 0;
    width: 140px;
    font-weight: bold;
  }

  & .item-content {
    min-width: 0;
    flex-grow: 1;
  }

  ${({ theme }) => theme.device.media(600)} {
    flex-direction: column;
    & .item-name {
      margin-bottom: 0.5rem;
      width: auto;
    }
  }
`

const PLinks = styled(ProjectItem)`
  & .project-links a {
    color: ${({ theme }) => theme.colors.secondary};
    transition: ease opacity 0.1s;
    &:hover {
      opacity: 0.66;
    }
  }
`

type ProjectItemProps = React.HTMLAttributes<HTMLDivElement>

interface ProjectLinksProps extends ProjectItemProps {
  github: string
  demo: string
}

const ProjectLinks = ({ github, demo, ...props }: ProjectLinksProps) => {
  return (
    <PLinks {...props}>
      <h3 className="item-name">
        <FiLink2 style={{ transform: 'translateY(2px)' }} />
        {` 관련링크`}
      </h3>
      <div className="item-content">
        <BulletUl className="project-links">
          <li>
            <a title={github} href={github} target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
          <li>
            <a title={demo} href={demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          </li>
        </BulletUl>
      </div>
    </PLinks>
  )
}

interface ProjectStacksProps extends ProjectItemProps {
  items?: (string | JSX.Element)[]
}

const ProjectStacks = ({ items, ...props }: ProjectStacksProps) => {
  return (
    <ProjectItem {...props}>
      <h3 className="item-name">
        <RiStackFill style={{ transform: 'translateY(2px)' }} />
        {` 사용기술`}
      </h3>
      <div className="item-content">
        <BulletUl>
          {items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </BulletUl>
      </div>
    </ProjectItem>
  )
}

export default ProjectItem
export { ProjectLinks, ProjectStacks }
