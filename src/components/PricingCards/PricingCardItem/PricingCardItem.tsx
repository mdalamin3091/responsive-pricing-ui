import Dropdown from "../../Dropdown/Dropdown";
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

const PricingCardItem: FC<{ plans: Plan[] }> = ({ plans }) => {
  return (
    <CardStyled>
      <PopularBadge>Most Popular</PopularBadge>
      <PlanName>{plans[0].name}</PlanName>
      <PlanPrice>
        <Amount>{plans[0].price}</Amount>
        <AmountWrapper>
          <AmountType>{plans[0].details["1_year"].price_postfix}</AmountType>
          {plans[0].details["1_year"].plan_type === "Billed annually" && (
            <span>$15/Month</span>
          )}
        </AmountWrapper>
      </PlanPrice>
      {plans.length > 1 ? (
        <Dropdown plans={plans} />
      ) : (
        <PlanInfo plan={plans[0]} />
      )}
      <FeaturesSection plan={plans[0]} />
    </CardStyled>
  );
};

export default PricingCardItem;
