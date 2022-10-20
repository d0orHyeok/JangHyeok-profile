import { DefaultTheme } from 'styled-components'

const size = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
}

const device = {
  media: (maxWidth: number | string) => {
    const width = typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`
    return `@media only screen and (max-width: ${width})`
  },
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
}

const colors = {
  text: '#303030',
  primary: `rgb(255, 152, 0)`,
  primarya: (opacity: number) => `rgba(255, 152, 0, ${opacity})`,
  secondary: `rgb(64, 156, 255)`,
  secondarya: (opacity: number) => `rgba((64, 156, 255, ${opacity})`,
}

export const appTheme: DefaultTheme = {
  colors,
  device,
}
