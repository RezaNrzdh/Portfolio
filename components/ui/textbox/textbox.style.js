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
    padding-right: 16px;
    padding-left: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: ${ Radius.small };
    font-family: PelakFont;
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
    left: 8px;
    top:auto;
    height: 100%;
    align-items: center;
    margin-right: 8px
`;