import styled from "styled-components";

export const StyledPlanInfo = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px 15px;
    background: ${({ theme }) => theme.colors.infoBgColor};
    border-radius: 100px;
    margin-top: 4px;
    color:  ${({ theme }) => theme.colors.infoColor};
    & > svg{
        cursor:pointer
    }
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 13px;
`

