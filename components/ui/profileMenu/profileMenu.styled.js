import {Color, Shadow, Radius} from 'components/index';
import styled from 'styled-components';

export const ProfileMenu = styled.div`
    display: flex;
    position: absolute;
    top:48px;
    left:0;
    width: 150px;
    padding: 24px;
    border: 1px solid ${ Color.strokeColor.main };
    background-color: ${ Color.surfaceColor.light };
    border-radius: ${ Radius.medium };
    box-shadow: ${ Shadow.xLarge };
`;

export const UnorderedList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const list = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    width: 100%;
    height: 40px;
    a{
        display: flex;
        label{
            margin-right: 16px;
        }
    }
`;