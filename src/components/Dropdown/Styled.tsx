import styled from "styled-components";

export const DropdownStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
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
  margin-top: 8px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 28px;
  transform: rotate(0deg);
  transition: all 0.15s ease-in-out;
  & > svg {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const DropdownTitle = styled.div`
  display: inline-block;
  font-size: ${({ theme }) => theme.sizes.xs};
  max-width: 144px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-overflow: ellipsis;
`;
