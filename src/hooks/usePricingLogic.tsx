import { useMemo } from "react";
import { useAppSelector } from "../redux/hook";
import { ActivePlan, Plan } from "../types";
export const usePricingLogic = (plans: Plan[]) => {
  const { activePlan, selectPlans } = useAppSelector(
    (state) => state.pricingPlans
  );

  const getPlanPriceHeader = useMemo(() => {
    const defaultPlan = plans[0];
    const yearlyDetails = defaultPlan.details["1_year"];
    const twoYearDetails = defaultPlan.details["2_year"];

    // Handle case when only one plan is available
    if (plans.length === 1) {
      return activePlan === ActivePlan.YEARLY
        ? { details: twoYearDetails, delPrice: yearlyDetails.price }
        : { details: yearlyDetails };
    }

    // Handle case when no plans are selected
    if (!selectPlans.length) {
      return { details: twoYearDetails, delPrice: yearlyDetails.price };
    }

    // Check if the default plan is selected
    const isDefaultPlanSelected = selectPlans.some(
      (plan) => plan.name === defaultPlan.name
    );

    // Return pricing details based on the active plan
    if (isDefaultPlanSelected) {
      return activePlan === ActivePlan.YEARLY
        ? {
            details: selectPlans.find((plan) => plan.name === defaultPlan.name)
              ?.details["2_year"],
            delPrice: selectPlans.find((plan) => plan.name === defaultPlan.name)
              ?.details["1_year"].price,
          }
        : {
            details: selectPlans.find((plan) => plan.name === defaultPlan.name)
              ?.details["1_year"],
          };
    }

    // Default return if no specific plan is selected
    return { details: twoYearDetails, delPrice: yearlyDetails.price };
  }, [activePlan, plans, selectPlans]);

  return { getPlanPriceHeader };
};