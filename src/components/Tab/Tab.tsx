import React from "react";
import { Flex } from "../../styles/Global";
import { TabBadge, TabButton } from "./styled";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setActivePlan } from "../../redux/slice";
import { ActivePlan } from "../../types";

const Tabs: React.FC = () => {
  const activePlan = useAppSelector((state) => state.pricingPlans.activePlan);
  const dispatch = useAppDispatch();
  return (
    <Flex center>
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
    </Flex>
  );
};

export default Tabs;
