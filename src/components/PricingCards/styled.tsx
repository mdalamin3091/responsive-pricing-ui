import styled from "styled-components";
import { device } from "../../styles/BreakPoints";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 30px;
  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.sm} {
    grid-template-columns: repeat(1, 1fr);
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
  gap: 5px;
`;

export const Amount = styled.p`
  font-size: ${({ theme }) => theme.sizes.xxl};
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.infoColor};
`;

export const AmountType = styled.span`
  font-size: ${({ theme }) => theme.sizes.sm};
  font-weight: 400;
  color: #83a1b7;
  align-self: flex-end;
`;

export const CardStyled = styled.div`
  height: 100%;
  padding: 24px 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-top: 8px solid ${({ theme }) => theme.colors.infoColor};
  ${Amount} {
    color: ${({ theme }) => theme.colors.infoColor};
  }

  &:nth-child(2) {
    border-top: 8px solid ${({ theme }) => theme.colors.warningColor};

    ${Amount} {
      color: ${({ theme }) => theme.colors.warningColor};
    }
  }
  &:nth-child(3) {
    border-top: 8px solid ${({ theme }) => theme.colors.successColor};

    ${Amount} {
      color: ${({ theme }) => theme.colors.successColor};
    }
  }
  &:nth-child(4) {
    border-top: 8px solid ${({ theme }) => theme.colors.primaryColor};
    ${Amount} {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;
