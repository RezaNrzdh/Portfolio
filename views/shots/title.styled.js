import styled from "styled-components";
import { Color, Typography } from "components";

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    width: 800px;
`;

export const Headline = styled.h1`
    color: ${ Color.textColor.primary };
    font-size: ${ Typography.headline1.fontSize };
    font-weight: ${ Typography.headline1.fontWeight };
`;

export const Details = styled.div`
    display: flex;
    margin-top: 24px;
    margin-bottom: 24px;
`;

export const Author = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 8px;
    align-items: center;
    color: ${ Color.textColor.primary };
    font-size: ${ Typography.body2.fontSize };
    font-weight: ${ Typography.body2.fontWeight };
    margin-left: 32px;
`;

export const create = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 8px;
    align-items: center;
    color: ${ Color.textColor.primary };
    font-size: ${ Typography.body2.fontSize };
    font-weight: ${ Typography.body2.fontWeight };
`;