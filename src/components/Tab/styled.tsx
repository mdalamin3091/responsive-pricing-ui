import styled from "styled-components";
import { Flex } from "../../styles/Global";
// import { device } from '../../styles/BreakPoints'

type TabButtonProps = {
  isActive?: boolean;
};
export const TabButton = styled.button<TabButtonProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primaryColor : theme.colors.textColor};
  font-size: ${({ theme }) => theme.sizes.md};
  font-weight: ${({ isActive }) => (isActive ? 600 : 400)};
  padding-block: 4px;
  border-bottom: 2px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.primaryColor : "transparent"};
  margin-inline: 15px;
  &:first-child {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 100%;
      background-color: #c6d7e3;
      right: -15px;
      top: 0;
    }
  }
`;

export const TabBadge = styled(Flex)`
  padding: 6px 12px;
  border-radius: 100px;
  background: rgba(183, 141, 235, 0.15);
  color: ${({ theme }) => theme.colors.textColor};
`;
