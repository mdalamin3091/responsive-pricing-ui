import { FC } from "react";
import { PlanDetail, ActivePlan } from "../../../types";
import { useAppSelector } from "../../../redux/hook";
import {
  Amount,
  AmountType,
  AmountWrapper,
  PlanPrice,
} from "../PricingCardItem/styled";

interface PricingCardHeaderProps {
  details?: PlanDetail;
  delPrice?: string;
}

const PricingCardHeader: FC<PricingCardHeaderProps> = ({
  details,
  delPrice,
}) => {
  const { activePlan } = useAppSelector((state) => state.pricingPlans);

  return (
    <PlanPrice>
      <Amount>{details?.price}</Amount>
      <AmountWrapper>
        <AmountType>{details?.price_postfix}</AmountType>
        {activePlan === ActivePlan.YEARLY &&
          details?.price !== "Free" &&
          delPrice && <span>{delPrice}/Month</span>}
      </AmountWrapper>
    </PlanPrice>
  );
};

export default PricingCardHeader;