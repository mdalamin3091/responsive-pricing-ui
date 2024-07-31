import WarningIcon from "../../../assets/svg/WarningIcon"
import { StyledPlanInfo, Text } from "./styled"

const PlanInfo = () => {
  return (
    <StyledPlanInfo>
        <Text>Up to 500 visitors/month</Text>
        <WarningIcon />
    </StyledPlanInfo>
  )
}

export default PlanInfo