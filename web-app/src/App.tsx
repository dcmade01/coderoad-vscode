import * as React from 'react'
import { ConfigProvider } from '@alifd/next'
import enUS from '@alifd/next/lib/locale/en-us'
import ErrorBoundary from './components/ErrorBoundary'
import Workspace from './components/Workspace'
import { ThemeProvider } from 'emotion-theming'
import theme from './styles/theme'
import Routes from './Routes'

const App = () => (
  /* @ts-ignore invalid in enUS locale typings for @alifd/next@1.20.20 https://github.com/alibaba-fusion/next/commit/e3b934b */
  <ConfigProvider locale={enUS}>
    <Workspace>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </ErrorBoundary>
    </Workspace>
  </ConfigProvider>
)

export default App
