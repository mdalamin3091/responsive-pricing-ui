import { useMemo } from "react";
import { useAppSelector } from "../redux/hook";
import { ActivePlan, Plan } from "../types";

export const usePricingLogic = (plans: Plan[]) => {
  const { activePlan, selectPlans } = useAppSelector((state) => state.pricingPlans);

  const getPlanPriceHeader = useMemo(() => {
    const defaultPlan = plans[0];
    const yearlyDetails = defaultPlan.details["1_year"];
    const twoYearDetails = defaultPlan.details["2_year"];

    if (plans.length === 1) {
      return activePlan === ActivePlan.YEARLY
        ? { details: twoYearDetails, delPrice: yearlyDetails.price }
        : { details: yearlyDetails };
    }

    if (!Object.keys(selectPlans).length) {
      return { details: twoYearDetails, delPrice: yearlyDetails.price };
    }

    const isDefaultPlanSelected = defaultPlan.name === selectPlans.name;
    
    if (isDefaultPlanSelected && activePlan === ActivePlan.YEARLY) {
      return {
        details: selectPlans.details["2_year"],
        delPrice: selectPlans.details["1_year"].price,
      };
    }

    return isDefaultPlanSelected
      ? { details: selectPlans.details["1_year"] }
      : { details: twoYearDetails, delPrice: yearlyDetails.price };
  }, [activePlan, plans, selectPlans]);

  return { getPlanPriceHeader };
};