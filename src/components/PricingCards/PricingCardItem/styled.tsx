import styled, { css, DefaultTheme } from "styled-components";
import { StyledPlanInfo } from "../PlanInfo/styled";
import { SelectPlanButton } from "../FeaturesSection/styled";
import {
  DropdownListItem,
  DropdownStyled,
  DropdownTitle,
  DropdownWrapper,
} from "../../Dropdown/Styled";

const getDynamicStyles = (
  theme: DefaultTheme,
  color: string,
  hoverColor: string,
  bgColor: string
) => css`
  border-top: 8px solid ${theme.colors[color]};
  ${Amount} {
    color: ${theme.colors[color]};
  }
  ${SelectPlanButton} {
    background-color: ${theme.colors[color]};
    &:hover {
      background-color: ${theme.colors[hoverColor]};
    }
  }
  ${StyledPlanInfo} {
    color: ${theme.colors[color]};
    background-color: ${theme.colors[bgColor]};
  }
  ${DropdownStyled} {
    border: 1px solid ${theme.colors[color]};
    &::after {
      border-bottom: 2px solid ${theme.colors[color]};
      border-right: 2px solid ${theme.colors[color]};
    }
  }
  ${DropdownTitle} {
    color: ${theme.colors[color]};
  }
  ${DropdownListItem} {
    &:hover {
      color: ${theme.colors[color]};
    }
  }
  ${DropdownWrapper} {
    & > svg {
      color: ${theme.colors[color]};
    }
  }
`;

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
  background: ${({ theme }) => theme.colors.white};
  position: relative;

  ${({ theme }) =>
    getDynamicStyles(theme, "infoColor", "infoHoverColor", "infoBgColor")}

  &:nth-child(2) {
    ${({ theme }) =>
      getDynamicStyles(
        theme,
        "warningColor",
        "warningHoverColor",
        "warningBgColor"
      )}
  }

  &:nth-child(3) {
    ${({ theme }) =>
      getDynamicStyles(
        theme,
        "successColor",
        "successHoverColor",
        "successBgColor"
      )}
    ${PopularBadge} {
      display: inline-block;
    }
  }

  &:nth-child(4) {
    ${({ theme }) =>
      getDynamicStyles(
        theme,
        "primaryColor",
        "primaryHoverColor",
        "primaryBgColor"
      )}
  }
`;
