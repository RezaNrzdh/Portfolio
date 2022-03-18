import styled from "styled-components";
import { Color, Typography } from '../..';

export const FooterWrapper = styled.footer`
    display: flex;
    width: 100%;
    height: 250px;
    background-color: ${ Color.backgroundColor };
`;

export const LogoWrapper = styled.div`
    display: flex;
    margin-top: 48px;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;
`;

export const Description = styled.div`
    display: flex;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 24px;
    font-size: ${ Typography.body2.fontSize };
    font-weight: ${ Typography.body2.fontWeight };
`;

export const SocialMediaWrapper = styled.div`
    display: grid;
    width: 100%;
    padding-top: 16px;
    justify-content: center;
    border-top: 1px solid ${ Color.strokeColor.main };
    grid-template-columns: 24px 24px 24px 24px;
    grid-column-gap: 24px;
`;

export const Anchor = styled.a``;