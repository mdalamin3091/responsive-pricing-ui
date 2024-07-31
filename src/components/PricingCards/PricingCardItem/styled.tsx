import styled from "styled-components";
import { StyledPlanInfo } from "../PlanInfo/styled";
import { SelectPlanButton } from "../FeaturesSection/styled";
import {
  DropdownListItem,
  DropdownStyled,
  DropdownTitle,
  DropdownWrapper,
} from "../../Dropdown/Styled";

export const PlanName = styled.h4`
  font-size: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 400;
`;

export const PlanPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0px;
  gap: 8px;
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  & > span {
    position: absolute;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.dangerColor};
    text-decoration: line-through;
    top: -5px;
    left: 0;
  }
`;

export const Amount = styled.p`
  font-size: ${({ theme }) => theme.sizes.xxl};
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.infoColor};
`;

export const AmountType = styled.p`
  font-size: ${({ theme }) => theme.sizes.sm};
  font-weight: 400;
  color: #83a1b7;
  align-self: flex-end;
  margin-top: 10px;
`;

export const PopularBadge = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.successColor};
  border-radius: 3px;
  display: none;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  line-height: 1;
  padding: 6.5px 8px;
  right: 6px;
  top: 6px;
`;

export const CardStyled = styled.div`
  height: 100%;
  padding: 24px 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-top: 8px solid ${({ theme }) => theme.colors.infoColor};
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  ${Amount} {
    color: ${({ theme }) => theme.colors.infoColor};
  }

  &:nth-child(2) {
    border-top: 8px solid ${({ theme }) => theme.colors.warningColor};

    ${Amount} {
      color: ${({ theme }) => theme.colors.warningColor};
    }
    ${SelectPlanButton} {
      background-color: ${({ theme }) => theme.colors.warningColor};
      &:hover {
        background-color: ${({ theme }) => theme.colors.warningHoverColor};
      }
    }
    ${StyledPlanInfo} {
      color: ${({ theme }) => theme.colors.warningColor};
      background-color: ${({ theme }) => theme.colors.warningBgColor};
    }
    ${DropdownStyled} {
      border: 1px solid ${({ theme }) => theme.colors.warningColor};

      &::after {
        border-bottom: 2px solid ${({ theme }) => theme.colors.warningColor};
        border-right: 2px solid ${({ theme }) => theme.colors.warningColor};
      }
    }
    ${DropdownTitle} {
      color: ${({ theme }) => theme.colors.warningColor};
    }
    ${DropdownListItem} {
      &:hover {
        color: ${({ theme }) => theme.colors.warningColor};
      }
    }

    ${DropdownWrapper} {
      & > svg {
        color: ${({ theme }) => theme.colors.warningColor};
      }
    }
  }
  
  &:nth-child(3) {
    border-top: 8px solid ${({ theme }) => theme.colors.successColor};

    ${PopularBadge} {
      display: inline-block;
    }
    ${Amount} {
      color: ${({ theme }) => theme.colors.successColor};
    }
    ${SelectPlanButton} {
      background-color: ${({ theme }) => theme.colors.successColor};
      &:hover {
        background-color: ${({ theme }) => theme.colors.successHoverColor};
      }
    }
    ${StyledPlanInfo} {
      color: ${({ theme }) => theme.colors.successColor};
      background-color: ${({ theme }) => theme.colors.successBgColor};
    }
    ${DropdownStyled} {
      border: 1px solid ${({ theme }) => theme.colors.successColor};

      &::after {
        border-bottom: 2px solid ${({ theme }) => theme.colors.successColor};
        border-right: 2px solid ${({ theme }) => theme.colors.successColor};
      }
    }
    ${DropdownTitle} {
      color: ${({ theme }) => theme.colors.successColor};
    }
    ${DropdownListItem} {
      &:hover {
        color: ${({ theme }) => theme.colors.successColor};
      }
    }

    ${DropdownWrapper} {
      & > svg {
        color: ${({ theme }) => theme.colors.successColor};
      }
    }
  }

  &:nth-child(4) {
    border-top: 8px solid ${({ theme }) => theme.colors.primaryColor};
    ${Amount} {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
    ${SelectPlanButton} {
      background-color: ${({ theme }) => theme.colors.primaryColor};
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHoverColor};
      }
    }
    ${StyledPlanInfo} {
      color: ${({ theme }) => theme.colors.primaryColor};
      background-color: ${({ theme }) => theme.colors.primaryBgColor};
    }
    ${DropdownStyled} {
      border: 1px solid ${({ theme }) => theme.colors.primaryColor};

      &::after {
        border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
        border-right: 2px solid ${({ theme }) => theme.colors.primaryColor};
      }
    }
    ${DropdownTitle} {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
    ${DropdownListItem} {
      &:hover {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }

    ${DropdownWrapper} {
      & > svg {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }
`;
