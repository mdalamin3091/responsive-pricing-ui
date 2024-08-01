import { FC, useMemo, useCallback } from "react";
import Tooltip from "../../Tooltip/Tooltip";
import {
  FeatureStyled,
  List,
  ListItem,
  SelectPlanButton,
  Title,
} from "./styled";
import { Plan } from "../../../types";
import { useAppSelector } from "../../../redux/hook";

const FeaturesSection: FC<{ plan: Plan }> = ({ plan }) => {
  const data = useAppSelector((state) => state.pricingPlans.data);

  const dynamicTitle = useMemo(() => {
    return plan?.name === "Free"
      ? "Free includes:"
      : "Everything in free plus:";
  }, [plan?.name]);

  const dynamicLoadFeatures = useCallback(() => {
    return data.features
      .map((feature, index) => {
        if (
          (Number(feature.is_pro) && plan.name !== "Free") ||
          (!Number(feature.is_pro) && plan.name === "Free")
        ) {
          return (
            <ListItem key={crypto.randomUUID() + index}>
              {feature.feature_title}
              <Tooltip arrowPosition="left" content={feature.feature_desc} />
            </ListItem>
          );
        }
        return null;
      })
      .filter(Boolean); // Filter out null values
  }, [data.features, plan.name]);

  return (
    <FeatureStyled>
      <Title>{dynamicTitle}</Title>
      <List>{dynamicLoadFeatures()}</List>
      <SelectPlanButton>Select Plan</SelectPlanButton>
    </FeatureStyled>
  );
};

export default FeaturesSection;
