import React from 'react'
import { GlobalStyle } from '@styles/global-style'
import { ThemeProvider } from 'styled-components'
import { appTheme } from '@styles/theme'
import './styles/font.css'
import View from '@components/View'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={appTheme}>
        <View />
      </ThemeProvider>
    </>
  )
}

export default App
