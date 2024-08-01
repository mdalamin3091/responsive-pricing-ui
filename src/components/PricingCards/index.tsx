import { useAppSelector } from "../../redux/hook";
import PricingCardItem from "./PricingCardItem/PricingCardItem";
import { CardWrapper } from "./styled";

const PricingCards = () => {
  const data = useAppSelector((state) => state.pricingPlans.data);

  return (
    <CardWrapper>
      {data.plans.slice(0, 4).map((plan, index) => (
        <PricingCardItem key={index} plan={plan} />
      ))}
    </CardWrapper>
  );
};

export default PricingCards;
