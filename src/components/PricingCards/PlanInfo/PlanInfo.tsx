import { FC } from "react";
import WarningIcon from "../../../assets/svg/WarningIcon";
import Tooltip from "../../Tooltip/Tooltip";
import { StyledPlanInfo, Text } from "./styled";
import { Plan } from "../../../types";

const PlanInfo: FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <StyledPlanInfo>
      <Text
        dangerouslySetInnerHTML={{
          __html: plan.title,
        }}
      />
      <WarningIcon />
      <Tooltip content={plan.text} />
    </StyledPlanInfo>
  );
};

export default PlanInfo;
