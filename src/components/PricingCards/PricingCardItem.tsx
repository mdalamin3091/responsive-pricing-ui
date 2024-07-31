import { Amount, AmountType, CardStyled, PlanName, PlanPrice } from "./styled";

const PricingCardItem = () => {
  return (
    <CardStyled>
      <PlanName>Free</PlanName>
      <PlanPrice>
        <Amount>$15</Amount>
        <AmountType>/Month</AmountType>
      </PlanPrice>
    </CardStyled>
  );
};

export default PricingCardItem;
