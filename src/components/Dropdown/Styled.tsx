import styled, { css } from "styled-components";
import { TooltipStyled } from "../Tooltip/styled";

export const DropdownStyled = styled.div<{ open?: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.infoColor};
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 30px;
  position: relative;
  transition: all 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;
  width: auto;

  &::after {
    border-bottom: 2px solid ${({ theme }) => theme.colors.infoColor};
    border-right: 2px solid ${({ theme }) => theme.colors.infoColor};
    content: "";
    display: block;
    height: 8px;
    margin-top: -4px;
    pointer-events: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform-origin: 66% 66%;
    transition: all 0.15s ease-in-out;
    width: 8px;
    ${({ open }) =>
      open
        ? css`
            transform: rotate(225deg);
          `
        : css`
            transform: rotate(45deg);
          `}
  }
`;

export const DropdownTitle = styled.div`
  display: inline-block;
  font-size: ${({ theme }) => theme.sizes.xs};
  max-width: 144px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.infoColor};
  text-overflow: ellipsis;
`;

export const DropdownList = styled.ul<{ open?: boolean }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  width: 225px;
  height: auto;
  top: 25px;
  left: 0;
  box-shadow: ${({ theme }) => theme.shadows.dropdownShadow};
  list-style-type: none;
  padding-left: 0;
  z-index: 10;
  transform-origin: 50% 0;
  transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;

  ${({ open }) =>
    open
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;

export const DropdownListItem = styled.li<{ isSelected: boolean }>`
  padding-left: 18px;
  font-size: ${({ theme }) => theme.sizes.xs};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #f7f5fb;
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.infoColor};
    background-color: #f7f5fb;
  }

  &:last-child {
    border-bottom: 0px;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 8px;
  position: relative;
  width: fit-content;
  & > svg {
    color: ${({ theme }) => theme.colors.infoColor};
    cursor: pointer;
  }

  & > svg:hover + ${TooltipStyled} {
    visibility: visible;
    opacity: 1;
  }
`;
