import WarningIcon from "../../../assets/svg/WarningIcon"
import Tooltip from "../../Tooltip/Tooltip"
import { StyledPlanInfo, Text } from "./styled"

const PlanInfo = () => {
  return (
    <StyledPlanInfo>
        <Text>Up to 500 visitors/month</Text>
        <WarningIcon />
        <Tooltip />
    </StyledPlanInfo>
  )
}

export default PlanInfo