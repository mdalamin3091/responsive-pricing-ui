import PricingCards from "../components/PricingCards";
import Tabs from "../components/Tab";
import { Container } from "../styles/Global";

const PricingPlanPage = () => {
  return (
      <Container>
        <Tabs />
        <PricingCards />
      </Container>
  );
};

export default PricingPlanPage;
