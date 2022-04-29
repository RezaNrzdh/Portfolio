import styled from 'styled-components';
import { Color, Typography } from 'components/index';

export const UnorderedList = styled.ul`
    display: flex;
    margin: 0;
    height: inherit;
`;

export const List = styled.li`
    list-style: none;
    height: inherit;
`;

export const Anchor = styled.a`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    height: inherit;
    box-sizing: border-box;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 32px;
    color: ${ Color.textColor.primary };
    font-size: ${ Typography.body1.fontSize };
    font-weight: ${ Typography.body1.fontWeight };
    &::after{
        content: "";
            display: flex;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            bottom: 0;
            right: 0;
            left: 0;
            width: 0%;
            height: 2px;
            transition: all ease-in-out 0.3s;
            background-color: ${ Color.primaryColor.main };
    }
    &:hover{
        &::after{
            width: 100%;
        }
    }
`;