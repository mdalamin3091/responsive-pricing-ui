import { useMemo } from "react";
import { useAppSelector } from "../../redux/hook";
import PricingCardItem from "./PricingCardItem/PricingCardItem";
import { CardWrapper } from "./styled";

const PricingCards = () => {
  const data = useAppSelector((state) => state.pricingPlans.data);

  const groupedPlans = useMemo(() => {
    return data.plans.reduce<Record<string, (typeof data.plans)[number][]>>(
      (acc, plan) => {
        if (!acc[plan.name]) {
          acc[plan.name] = [];
        }
        acc[plan.name].push(plan);
        return acc;
      },
      {}
    );
  }, [data]);
  console.log("data", data)
  return (
    <CardWrapper>
      {Object.keys(groupedPlans).map((planName, index) => (
        <PricingCardItem
          key={crypto.randomUUID() + index}
          plans={groupedPlans[planName]}
        />
      ))}
    </CardWrapper>
  );
};

export default PricingCards;
