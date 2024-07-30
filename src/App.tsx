import { ThemeProvider } from 'styled-components'
import { Container, GlobalStyles } from './styles/Global'
import { theme } from './styles/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <h1>In the name of Allah</h1>
      </Container>
    </ThemeProvider>
  )
}

export default App
