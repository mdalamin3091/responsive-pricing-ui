import WarningIcon from "../../../assets/svg/WarningIcon"
import { TooltipStyled } from "../../../styles/Global"
import { StyledPlanInfo, Text } from "./styled"

const PlanInfo = () => {
  return (
    <StyledPlanInfo>
        <Text>Up to 500 visitors/month</Text>
        <WarningIcon />
        <TooltipStyled right>The total number of unique visitors who can view Chaty on your
      website each month. The visitors' counter resets once every month
    </TooltipStyled>
    </StyledPlanInfo>
  )
}

export default PlanInfo