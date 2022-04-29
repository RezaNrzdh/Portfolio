import styled, { css } from "styled-components";
import { Color, Radius, Typography } from '../../index';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 8px;
    max-width: ${ props => props.iconOnly ? '40px' : null };
    padding-left: ${ props => props.iconOnly ? '8px' : '16px' };
    padding-right:${ props => props.iconOnly ? '8px' : '16px' };
    transition: background-color ease-in-out 0.3s;
    font-family: UbuntuFont;
    font-size: ${ Typography.body1.fontSize };
    font-weight: ${ Typography.body1.fontWeight };
    svg{
        width: 24px;
        height: 24px;
    }
`;

export const PrimaryOutlined = styled(Button)`
    border: 1px solid ${ Color.primaryColor.main };
    background-color: transparent;
    color: ${ Color.primaryColor.main };
`;

export const PrimaryFilled = styled(Button)`
    background-color: ${ Color.primaryColor.main };
    border: transparent;
    color: ${ Color.textColor.contrast };
`;

export const SecondaryOutlined = styled(Button)`
    border: 1px solid ${ Color.secondaryColor.main };
    background-color: transparent;
    color: ${ Color.secondaryColor.main };
`;

export const SecondaryFilled = styled(Button)`
    background-color: ${ Color.secondaryColor.main };
    border: transparent;
    color: ${ Color.textColor.contrast };
`;

export const DarkOutlined = styled(Button)`
    border: 1px solid ${ Color.darkColor.main };
    background-color: transparent;
    color: ${ Color.textColor.main };
`;

export const DarkFilled = styled(Button)`
    background-color: ${ Color.darkColor.main };
    border: transparent;
    color: ${ Color.textColor.contrast };
`;

export const Light = styled(Button)`
    width: 40px;
    height: 40px;
    color: ${ Color.textColor.main };
    border: transparent;
    background-color: ${ Color.surfaceColor.light };
    &:hover{
        background-color: ${ Color.primaryColor.main };
        svg{
            fill: #ffffff;
        }
    }
`;

export const Link = styled(Button)`
    color: ${ Color.textColor.main };
    border: transparent;
    background-color: transparent;
    &:hover{
        background-color: ${ Color.strokeColor.main };
    }
`;