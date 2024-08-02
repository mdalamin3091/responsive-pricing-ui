import Dropdown from "../../Dropdown/Dropdown";
import { FC, useMemo } from "react";
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
import { ActivePlan, Plan, PlanDetail } from "../../../types";
import { useAppSelector } from "../../../redux/hook";
const PricingCardItem: FC<{ plans: Plan[] }> = ({ plans }) => {
  const { activePlan } = useAppSelector((state) => state.pricingPlans);
  
  const planPriceDynamic = useMemo(() => {
    if (plans.length > 1) {
      return <PricingCardHeader details={plans[0].details["1_year"]} />;
    } else {
      if (activePlan === ActivePlan.YEARLY) {
        return (
          <PricingCardHeader
            details={plans[0].details["2_year"]}
            delPrice={plans[0].details["1_year"].price}
          />
        );
      } else {
        return <PricingCardHeader details={plans[0].details["1_year"]} />;
      }
    }
  }, [activePlan, plans]);

  return (
    <CardStyled>
      <PopularBadge>Most Popular</PopularBadge>
      <PlanName>{plans[0].name}</PlanName>
      {planPriceDynamic}
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

const PricingCardHeader: FC<{ details?: PlanDetail; delPrice?: string }> = ({
  details,
  delPrice,
}) => {
  const { activePlan } = useAppSelector((state) => state.pricingPlans);
  return (
    <PlanPrice>
      <Amount>{details?.price}</Amount>
      <AmountWrapper>
        <AmountType>{details?.price_postfix}</AmountType>
        {activePlan === ActivePlan.YEARLY && details?.price !== "Free" && delPrice && (
          <span>{delPrice}/Month</span>
        )}
      </AmountWrapper>
    </PlanPrice>
  );
};
