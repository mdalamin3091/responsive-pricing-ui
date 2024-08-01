import WarningIcon from "../../assets/svg/WarningIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setDropdownOpen } from "../../redux/slice";
import Tooltip from "../Tooltip/Tooltip";
import { DropdownList, DropdownListItem, DropdownStyled, DropdownTitle, DropdownWrapper } from "./Styled";

const Dropdown = () => {
  const openDropdownMenu = useAppSelector(
    (state) => state.pricingPlans.openDropdownMenu
  );
  const dispatch = useAppDispatch();

  const handleDropdownMenu = (value:string) => {
    if(openDropdownMenu === value){
      dispatch(setDropdownOpen(""))
    }else{
      dispatch(setDropdownOpen(value))
    }
  }

  return (
    <DropdownWrapper>
      <DropdownStyled onClick={() => handleDropdownMenu("Free")} open={openDropdownMenu === "Free"}>
        <DropdownTitle
          dangerouslySetInnerHTML={{
            __html: "Up to <strong>50,000</strong> visitors/month",
          }}
        />
        <DropdownList open={openDropdownMenu === "Free"}>
          <DropdownListItem>Up to 50,000 visitors/month</DropdownListItem>
          <DropdownListItem>Up to 50,000 visitors/month</DropdownListItem>
          <DropdownListItem>Up to 50,000 visitors/month</DropdownListItem>
          <DropdownListItem>Up to 50,000 visitors/month</DropdownListItem>
        </DropdownList>
      </DropdownStyled>
      <WarningIcon />
      <Tooltip content=""/>
    </DropdownWrapper>
  );
};

export default Dropdown;
