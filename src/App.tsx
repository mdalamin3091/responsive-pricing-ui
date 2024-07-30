import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import Provider from './providers'
import PricingPlanPage from './pages/Pricing'
function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <PricingPlanPage />
      </ThemeProvider>
    </Provider>
  )
}

export default App
