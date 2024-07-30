import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import Provider from './providers'
import PricingPlanPage from './pages/Pricing'
import { GlobalStyles } from './styles/Global'
function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
        <PricingPlanPage />
      </ThemeProvider>
    </Provider>
  )
}

export default App
