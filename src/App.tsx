import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import Provider from "./providers";
import PricingPlanPage from "./pages/Pricing";
import { GlobalStyles } from "./styles/Global";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <GlobalStyles />
        <PricingPlanPage />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
