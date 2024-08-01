import React from "react";
import { TabBadge, TabButton, TabWrapper } from "./styled";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setActivePlan } from "../../redux/slice";
import { ActivePlan } from "../../types";

const Tabs: React.FC = () => {
  const { activePlan, data: { plansInfo } = {} } = useAppSelector(
    (state) => state.pricingPlans
  );
  const dispatch = useAppDispatch();
  return (
    <TabWrapper>
      <TabButton
        onClick={() => dispatch(setActivePlan(ActivePlan.MONTHLY))}
        isActive={activePlan === ActivePlan.MONTHLY}
      >
        {plansInfo?.["1_year"]?.title || "Billed monthly"}
      </TabButton>
      <TabButton
        onClick={() => dispatch(setActivePlan(ActivePlan.YEARLY))}
        isActive={activePlan === ActivePlan.YEARLY}
      >
        {plansInfo?.["2_year"]?.title || "Billed yearly"}
      </TabButton>
      <TabBadge>{plansInfo?.["2_year"]?.discount}</TabBadge>
    </TabWrapper>
  );
};

export default Tabs;
