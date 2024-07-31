import Tooltip from "../../Tooltip/Tooltip";
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
            <Tooltip arrowPosition="left" content="" />
          </ListItem>
        ))}
      </List>
      <SelectPlanButton>Select Plan</SelectPlanButton>
    </FeatureStyled>
  );
};

export default FeaturesSection;
