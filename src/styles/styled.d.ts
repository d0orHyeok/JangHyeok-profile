// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    device: Device
  }
}

interface Colors {
  text: string
  primary: string
  primarya: (opacity: number) => string
  secondary: string
  secondarya: (opacity: number) => string
}

interface Device {
  media: (maxWidth: number | string) => string
  mobile: string
  tablet: string
  desktop: string
}
