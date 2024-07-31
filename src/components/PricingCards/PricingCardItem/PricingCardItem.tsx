import FeaturesSection from "../FeaturesSection/FeaturesSection";
import PlanInfo from "../PlanInfo/PlanInfo";
import { Amount, AmountType, AmountWrapper, CardStyled, PlanName, PlanPrice, PopularBadge } from "./styled";

const PricingCardItem = () => {
  return (
    <CardStyled>
      <PopularBadge>Most Popular</PopularBadge>
      <PlanName>Free</PlanName>
      <PlanPrice>
        <Amount>$15</Amount>
        <AmountWrapper>
          <AmountType>/Month</AmountType>
          <span>$15/Month</span>
        </AmountWrapper>
      </PlanPrice>
      <PlanInfo />
      <FeaturesSection />
    </CardStyled>
  );
};

export default PricingCardItem;
