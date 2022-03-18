import styled from 'styled-components';
import { Color, Radius, Shadow, Typography } from 'components/index';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 336px;
    padding: 32px;
    background-color: ${ Color.surfaceColor.light };
    border-radius: ${ Radius.medium };
    box-shadow: ${ Shadow.large };
    a{
        align-self: center;
    }
    #email, #password{
        margin-bottom: 24px;
    }
    button{
        width: 100%;
    }
`;

export const Welcome = styled.label`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    font-size: ${ Typography.body2.fontSize };
    font-weight: ${ Typography.body2.fontWeight };
    color: ${ Color.textColor.primary };
`;

export const Desc = styled.label`
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 32px;
    font-size: ${ Typography.body2.fontSize };
    font-weight: ${ Typography.body2    .fontWeight };
    color: ${ Color.textColor.secondary };
`;

export const Label = styled.label`
    display: flex;
    font-size: ${ Typography.body1.fontSize };
    font-weight: ${ Typography.body1.fontWeight };
    color: ${ Color.textColor.primary };
    margin-bottom: 8px;
`;