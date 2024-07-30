import { ThemeProvider } from 'styled-components'
import { Container, GlobalStyles } from './styles/Global'
import { theme } from './styles/Theme'
import Provider from './providers'

function App() {
  return (
    <Provider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <h1>In the name of Allah</h1>
      </Container>
    </ThemeProvider>
    </Provider>
  )
}

export default App
