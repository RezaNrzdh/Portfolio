import { Shadow, Color } from '../../../components';
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
    align-items: center;
    margin-right: 24px;
    height: inherit;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    height: inherit;
`;