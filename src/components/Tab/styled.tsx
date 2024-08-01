import styled from "styled-components";
import { device } from "../../styles/BreakPoints";

type TabButtonProps = {
  isActive?: boolean;
};

export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    & > button {
      &::after {
        width: 0px;
      }
    }
  }
`;

export const TabButton = styled.button<TabButtonProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primaryColor : theme.colors.textColor};
  font-size: ${({ theme }) => theme.sizes.md};
  font-weight: ${({ isActive }) => (isActive ? 500 : 400)};
  padding-block: 4px;
  border-bottom: 2px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.primaryColor : "transparent"};
  margin-inline: 15px;
  white-space: nowrap;
  @media ${device.sm} {
    margin-inline: 0px;
  }
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 100%;
    background-color: #c6d7e3;
    right: -25px;
    top: 0;
    @media ${device.sm} {
      right: -13px;
      top: 2px;
    }
  }
`;

export const TabBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 100px;
  background: rgba(183, 141, 235, 0.15);
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.sizes.md};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${device.sm} {
    padding-inline: 10px;
    font-size: ${({ theme }) => theme.sizes.sm};
  }
`;
