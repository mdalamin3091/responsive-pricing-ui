import { TooltipStyled } from "../../../styles/Global";
import {
  FeatureStyled,
  List,
  ListItem,
  SelectPlanButton,
  Title,
} from "./styled";

const FeaturesSection = () => {
  return (
    <FeatureStyled>
      <Title>Free includes:</Title>
      <List>
        {Array.from({ length: 10 }).map((_, index) => (
          <ListItem key={index}>
            Unlimited widgets
            <TooltipStyled left>
              The total number of unique visitors who can view Chaty on your
              website each month. The visitors' counter resets once every month
            </TooltipStyled>
          </ListItem>
        ))}
      </List>
      <SelectPlanButton>Select Plan</SelectPlanButton>
    </FeatureStyled>
  );
};

export default FeaturesSection;
