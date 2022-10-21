import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const StyledHeader = styled.header`
  position: relative;
  min-height: 100vh;
  background-image: url('https://i.imgur.com/WmlGtX3.jpg');
  background-size: cover;
  font-size: 1rem;

  ${({ theme }) => theme.device.mobile} {
    font-size: 0.85rem;
  }

  & .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(57, 99, 157, 0.9);
  }
`

export const HeaderContainer = styled.div`
  position: relative;
  z-index: 100;

  & .profile {
    padding: 1rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    & .profile-image {
      width: 200px;
      height: 200px;

      & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }

    & .profile-desc {
      color: white;
      text-align: center;

      & > *:not(:last-child) {
        margin-bottom: 1rem;
      }

      & .desc-name {
        font-size: 1.5em;
        height: 1.8em;

        & span:not(.italic) {
          font-weight: bold;
        }

        & .italic {
          font-family: 'KaushanScript';
        }
      }

      & .desc-job {
        font-family: 'SpaceMono';
      }

      & .desc-text {
        white-space: pre-wrap;
        font-size: 0.85em;
      }

      & .fadein {
        opacity: 1;
        animation: ${fadeIn} 0.5s;
      }

      & .fadeout {
        display: none;
      }
    }

    & .profile-contact ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      font-size: 2em;

      & li a {
        cursor: pointer;
        color: white;
        transition: ease 0.2s color;
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  @keyframes down {
    0% {
      margin-top: 2rem;
    }
    50% {
      margin-top: 1rem;
    }
    100% {
      margin-top: 2rem;
    }
  }

  & .scroll-down {
    height: 3rem;
    & .icon-down {
      color: white;
      font-size: 1rem;
      font-weight: bold;
      animation: down 2s infinite;
    }
  }
`
