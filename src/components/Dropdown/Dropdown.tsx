import DownArrowIcon from "../../assets/svg/DownArrowIcon"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { setDropdownOpen } from "../../redux/slice";
import { DropdownStyled, DropdownTitle, IconWrapper } from "./Styled"

const Dropdown = () => {
  const dropdownOpen = useAppSelector(state => state.pricingPlans.dropdownOpen);
  const dispatch = useAppDispatch();
  return (
    <DropdownStyled onClick={() => dispatch(setDropdownOpen(!dropdownOpen))}>
        <DropdownTitle dangerouslySetInnerHTML={{__html:"Up to <strong>50,000</strong> visitors/month"}} />
        <IconWrapper>
            <DownArrowIcon />
        </IconWrapper>
    </DropdownStyled>
  )
}

export default Dropdown