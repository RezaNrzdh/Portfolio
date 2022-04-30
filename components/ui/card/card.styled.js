import styled from "styled-components";
import { Color, Radius, Shadow, Typography } from "../..";

export const CardWrapper = styled.a`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid ${ Color.strokeColor.main };
    border-radius: ${ Radius.medium };
    transition: all ease-in-out 0.1s;
    &:hover{
        border: 1px solid ${ Color.secondaryColor.main };
        box-shadow: ${ Shadow.large };
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 75%;
    background-color: ${ Color.strokeColor.main };
    border-top-left-radius: ${ Radius.medium };
    border-top-right-radius: ${ Radius.medium };
`;

export const Image = styled.img`
    border-top-left-radius: ${ Radius.medium };
    border-top-right-radius: ${ Radius.medium };
    object-fit: cover;
    transition: all ease-in-out 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`;

export const CardBodyInfo = styled.div`
    padding: 8px 16px 24px 16px;
`;

export const Title = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 64px;
    height: 64px;
    padding-bottom: 8px;
    color: ${ Color.textColor.primary };
    font-size: ${ Typography.headline4.fontSize };
    font-weight: ${ Typography.headline4.fontWeight };
    text-align: center;
`;

export const CardDetail = styled.div`
    display: flex;
    flex-direction: column;
    &::before{
        display:flex;
        align-self: center;
        justify-self: end;
        margin-bottom: 16px;
        content: '';
        width: 64px;
        height: 2px;
        background-color: ${ Color.primaryColor.main };
    }
    & > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;

export const Author = styled.div`
    display: flex;
    align-items: center;
`;

export const Create = styled.div`
    display: flex;
    align-items: center;
`;

export const Span = styled.span`
    display: flex;
    margin-left: 8px;
    font-size: ${ Typography.body2.fontSize };
    font-weight: ${ Typography.body2.fontWeight };
`;