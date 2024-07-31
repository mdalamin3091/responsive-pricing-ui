import styled from "styled-components";
import { TooltipStyled } from "../../Tooltip/styled";

export const FeatureStyled = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: column;
`
export const Title = styled.h4`
    color: ${({ theme }) => theme.colors.textColor};
    font-size: ${({ theme }) => theme.sizes.md};
    font-weight: 500;
`
export const List = styled.ul`
    list-style-type: none;
    margin-bottom: 12px;
    text-align: left;
    padding-left: 0px;
`

export const ListItem = styled.li`
    line-height: 1;
    margin: 0;
    padding: 10px 0;
    font-size: ${({ theme }) => theme.sizes.sm};
    color: ${({ theme }) => theme.colors.textColor};
    position: relative;
    cursor: pointer;
    width: fit-content;
    &:hover ${TooltipStyled} {
    visibility: visible;
    opacity: 1;
  }
`

export const SelectPlanButton = styled.button`
    border-radius: 8px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};
    display: block;
    font-weight: 400;
    line-height: 40px;
    margin-top: auto;
    text-align: center;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.infoColor};
    transition: background-color .3s;

    &:hover{
        background-color: ${({ theme }) => theme.colors.infoHoverColor};
    }
`