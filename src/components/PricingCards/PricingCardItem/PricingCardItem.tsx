// import Dropdown from "../../Dropdown/Dropdown";
import { FC } from "react";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import PlanInfo from "../PlanInfo/PlanInfo";
import {
  Amount,
  AmountType,
  AmountWrapper,
  CardStyled,
  PlanName,
  PlanPrice,
  PopularBadge,
} from "./styled";
import { Plan } from "../../../types";

const PricingCardItem: FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <CardStyled>
      <PopularBadge>Most Popular</PopularBadge>
      <PlanName>{plan.name}</PlanName>
      <PlanPrice>
        <Amount>{plan.price}</Amount>
        <AmountWrapper>
          <AmountType>{plan.details["1_year"].price_postfix}</AmountType>
          {plan.details["1_year"].plan_type === "Billed annually" && (
            <span>$15/Month</span>
          )}
        </AmountWrapper>
      </PlanPrice>
      <PlanInfo plan={plan} />
      {/* <Dropdown /> */}
      <FeaturesSection plan={plan}/>
    </CardStyled>
  );
};

export default PricingCardItem;
