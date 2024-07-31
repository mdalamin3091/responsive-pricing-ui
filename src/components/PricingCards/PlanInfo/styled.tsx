import styled from "styled-components";
import { TooltipStyled } from "../../Tooltip/styled";

export const StyledPlanInfo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 5px;
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.infoBgColor};
  border-radius: 100px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.infoColor};

  & > svg {
    cursor: pointer;
  }

  & > svg:hover + ${TooltipStyled} {
    visibility: visible;
    opacity: 1;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 13px;
`;
