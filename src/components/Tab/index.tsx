import React, { useMemo } from "react";
import { TabBadge, TabButton, TabWrapper } from "./styled";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setActivePlan } from "../../redux/slice";
import { ActivePlan } from "../../types";

const Tabs: React.FC = () => {
  const { activePlan, data: { plansInfo } = {} } = useAppSelector(
    (state) => state.pricingPlans
  );
  const dispatch = useAppDispatch();

  const createTabButton = useMemo(
    () => (plan: ActivePlan, key: string, defaultTitle: string) =>
      (
        <TabButton
          onClick={() => dispatch(setActivePlan(plan))}
          isActive={activePlan === plan}
        >
          {plansInfo && key in plansInfo
            ? plansInfo[key as keyof typeof plansInfo]?.title
            : defaultTitle}
        </TabButton>
      ),
    [dispatch, activePlan, plansInfo]
  );

  return (
    <TabWrapper>
      {createTabButton(ActivePlan.MONTHLY, "1_year", "Billed monthly")}
      <div>
        {createTabButton(ActivePlan.YEARLY, "2_year", "Billed yearly")}
        <TabBadge>{plansInfo?.["2_year"]?.discount}</TabBadge>
      </div>
    </TabWrapper>
  );
};

export default Tabs;
