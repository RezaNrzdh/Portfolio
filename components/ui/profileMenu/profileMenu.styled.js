import {Color, Shadow, Radius, Typography, ShadowCustom} from 'components/index';
import styled from 'styled-components';

export const ProfileMenu = styled.div`
    display: flex;
    position: absolute;
    top:48px;
    left:0;
    width: 180px;
    overflow: hidden;
    background-color: ${ Color.surfaceColor.light };
    border-radius: ${ Radius.medium };
    box-shadow: ${ ShadowCustom(0,3,12,16) };
`;

export const UnorderedList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 16px 0;
`;

export const list = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    width: 100%;
    height: 40px;
    padding: 0 16px;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color ease-in-out 0.2s;
    a{
        display: flex;
        width: 100%;
        label{
            margin-right: 16px;
            color: ${ Color.textColor.primary };
            font-size: ${ Typography.body2.fontSize };
            font-weight: ${ Typography.body2.fontWeight };
            cursor: pointer;
        }
    }
    &:hover{
        background-color: ${ Color.secondaryColor.hover };
    }
`;