import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@storybook/react'
import { defaultTheme } from '../packages/theming/src'

function loadStories() {
  const req = require.context('../packages/', true, /src\/\w+\.story\.js$/)

  req.keys().forEach(req)
}

const RootDecorator = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 30px;
`

addDecorator((fn) => (
  <ThemeProvider theme={defaultTheme}>
    <RootDecorator>{fn()}</RootDecorator>
  </ThemeProvider>
))

configure(loadStories, module)
