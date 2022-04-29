import styled from "styled-components";
import { Color, Radius, Typography } from '../../index';

export const FieldWrapper = styled.div`
    display: flex;
    position: relative;
`;

export const Field = styled.input`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 16px;
    padding-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: ${ Radius.small };
    font-family: UbuntuFont;
    outline: none;
    transition: border-color ease-in-out 0.3s;
    border: ${ props => props.outlined ? `2px solid ${ Color.strokeColor.main }` : null };
    background-color: ${ props => props.outlined ? Color.surfaceColor.light : Color.backgroundColor };
    font-size: ${ Typography.body2.fontSize };
    font-weight: ${ Typography.body2.fontWeight };
    &:focus{
        border-color: ${ Color.secondaryColor.main };
    }
`;

export const Anchor = styled.a`
    display: flex;
    position: absolute;
    right: 12px;
    top:auto;
    height: 100%;
    align-items: center;
    margin-left: 8px
`;