import styled from "styled-components";

export const TooltipStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #fff;
  border-radius: 8px;
  bottom: calc(100% + 10px);
  box-shadow: ${({ theme }) => theme.shadows.tooltipShadow};
  color: ${({ theme }) => theme.colors.textColor};
  visibility: hidden;
  opacity: 0;
  font-size: ${({ theme }) => theme.sizes.sm};
  left: -10px;
  line-height: 1.5;
  min-width: 224px;
  padding: 5px 10px;
  position: absolute;
  white-space: normal;
  width: calc(100% + 20px);
  word-break: break-word;
  z-index: 10;
  transition: visibility 0s, opacity 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    border: 8px solid transparent;
    border-top-color: #fff;
    bottom: -15px;
    box-shadow: 0 4px 12px -4px rgba(73, 104, 126, 0.2);
    right: 25px;
    margin-left: -5px;
    z-index: 102;
  }
`;
