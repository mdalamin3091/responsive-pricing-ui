import { FC, useEffect, useCallback } from "react";
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
  const { openDropdownMenu, selectPlans } = useAppSelector((state) => state.pricingPlans);
  const dispatch = useAppDispatch();

  const handleDropdownMenu = useCallback((value: string) => {
    dispatch(setDropdownOpen(openDropdownMenu === value ? "" : value));
  }, [dispatch, openDropdownMenu]);

  const handleSelectPlan = useCallback((plan: Plan) => {
    dispatch(setSelectPlans(plan));
  }, [dispatch]);

  useEffect(() => {
    handleSelectPlan(plans[0]);
  }, [plans, handleSelectPlan]);

  const isOpen = openDropdownMenu === plans[0].name;
  const dropdownTitle = plans[0].name === selectPlans.name ? selectPlans.title : plans[0].title;
  return (
    <DropdownWrapper>
      <DropdownStyled open={isOpen} onClick={() => handleDropdownMenu(plans[0].name)}>
        <DropdownTitle dangerouslySetInnerHTML={{ __html: dropdownTitle }} />
        <DropdownList open={isOpen}>
          {plans.map((plan) => (
            <DropdownListItem
              key={plan.name}
              onClick={() => handleSelectPlan(plan)}
              dangerouslySetInnerHTML={{ __html: plan.title }}
              isSelected={plan.title === selectPlans.title }
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