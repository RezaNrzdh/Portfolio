import { Shadow, Color, Radius } from '../../../components';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    position: relative;
    width: 100%;
    height: 96px;
    background-color: ${ Color.surfaceColor.light };
    box-shadow: ${ Shadow.xLarge };
    z-index: 999;
`;

export const Auth = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    margin-left: 16px;
    height: 40px;
    .profileMenu{
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        border-radius: ${ Radius.small };
        background-color: ${ Color.primaryColor.main };
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    height: inherit;
`;