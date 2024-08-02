import { useMemo } from "react";
import { useAppSelector } from "../../redux/hook";
import PricingCardItem from "./PricingCardItem/PricingCardItem";
import { CardWrapper } from "./styled";

const PricingCards = () => {

  const { plans } = useAppSelector((state) => state.pricingPlans.data);
  const groupedPlans = useMemo(() => {
    return plans.reduce((acc, plan) => {
      (acc[plan.name] = acc[plan.name] || []).push(plan);
      return acc;
    }, {} as Record<string, (typeof plans)[number][]>);
  }, [plans]);

  return (
    <CardWrapper>
      {Object.entries(groupedPlans).map(([planName, plans], index) => (
        <PricingCardItem
          key={`${planName}-${index}`}
          plans={plans}
        />
      ))}
    </CardWrapper>
  );
};

export default PricingCards;
