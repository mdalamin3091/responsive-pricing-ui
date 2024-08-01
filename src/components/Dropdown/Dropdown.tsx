import { FC, useEffect } from "react";
import WarningIcon from "../../assets/svg/WarningIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setDropdownOpen, setSelectPlans } from "../../redux/slice";
import { Plan } from "../../types";
import Tooltip from "../Tooltip/Tooltip";
import {
  DropdownList,
  DropdownListItem,
  DropdownStyled,
  DropdownTitle,
  DropdownWrapper,
} from "./Styled";

const Dropdown: FC<{ plans: Plan[] }> = ({ plans }) => {
  const { openDropdownMenu, selectPlans } = useAppSelector(
    (state) => state.pricingPlans
  );
  const dispatch = useAppDispatch();

  const handleDropdownMenu = (value: string) => {
    if (openDropdownMenu === value) {
      dispatch(setDropdownOpen(""));
    } else {
      dispatch(setDropdownOpen(value));
    }
  };

  useEffect(() => {
    dispatch(setSelectPlans(plans[0]));
  }, [dispatch, plans]);
  
  return (
    <DropdownWrapper>
      <DropdownStyled
        onClick={() => handleDropdownMenu(plans[0].name)}
        open={openDropdownMenu === plans[0].name}
      >
        <DropdownTitle
          dangerouslySetInnerHTML={{
            __html:
              plans[0].name === selectPlans.name
                ? selectPlans.title
                : plans[0].title,
          }}
        />
        <DropdownList open={openDropdownMenu === plans[0].name}>
          {plans.map((plan, index) => (
            <DropdownListItem
              key={index}
              onClick={() => dispatch(setSelectPlans(plan))}
              dangerouslySetInnerHTML={{
                __html: plan.title,
              }}
            />
          ))}
        </DropdownList>
      </DropdownStyled>
      <WarningIcon />
      <Tooltip content={selectPlans.text} />
    </DropdownWrapper>
  );
};

export default Dropdown;
