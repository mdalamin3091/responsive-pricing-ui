import { useMemo } from "react";
import { useAppSelector } from "../redux/hook";
import { ActivePlan, Plan } from "../types";
export const usePricingLogic = (plans: Plan[]) => {
  const { activePlan, selectPlans } = useAppSelector(
    (state) => state.pricingPlans
  );

  const getPlanPriceHeader = useMemo(() => {
    const defaultPlan = plans[0];
    const monthlyDetails = defaultPlan.details["1_year"];
    const yearlyDetails = defaultPlan.details["2_year"];

    // Handle case when only one plan is available
    if (plans.length === 1) {
      return activePlan === ActivePlan.YEARLY
        ? { details: yearlyDetails, delPrice: monthlyDetails.price }
        : { details: monthlyDetails };
    }

    // Handle case when no plans are selected
    if (!selectPlans.length) {
      return { details: yearlyDetails, delPrice: monthlyDetails.price };
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
    return { details: yearlyDetails, delPrice: monthlyDetails.price };
  }, [activePlan, plans, selectPlans]);

  return { getPlanPriceHeader };
};