import React from "react";
import { TabBadge, TabButton, TabWrapper } from "./styled";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setActivePlan } from "../../redux/slice";
import { ActivePlan } from "../../types";

const Tabs: React.FC = () => {
  const activePlan = useAppSelector((state) => state.pricingPlans.activePlan);
  const dispatch = useAppDispatch();
  return (
    <TabWrapper>
      <TabButton
        onClick={() => dispatch(setActivePlan(ActivePlan.MONTHLY))}
        isActive={activePlan === ActivePlan.MONTHLY}
      >
        Billed monthly
      </TabButton>
      <TabButton
        onClick={() => dispatch(setActivePlan(ActivePlan.YEARLY))}
        isActive={activePlan === ActivePlan.YEARLY}
      >
        Billed yearly
      </TabButton>
      <TabBadge>Save 20% 😍</TabBadge>
    </TabWrapper>
  );
};

export default Tabs;
