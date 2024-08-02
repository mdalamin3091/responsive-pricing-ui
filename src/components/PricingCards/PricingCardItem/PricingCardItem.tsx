import { FC } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import PlanInfo from "../PlanInfo/PlanInfo";
import { CardStyled, PlanName, PopularBadge } from "./styled";
import { Plan } from "../../../types";
import PricingCardHeader from "../PricingCardHeader/PricingCardHeader";
import { usePricingLogic } from "../../../hooks/usePricingLogic";

const PricingCardItem: FC<{ plans: Plan[] }> = ({ plans }) => {
  const { getPlanPriceHeader } = usePricingLogic(plans);
  return (
    <CardStyled>
      <PopularBadge>Most Popular</PopularBadge>
      <PlanName>{plans[0].name}</PlanName>
      <PricingCardHeader {...getPlanPriceHeader} />
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