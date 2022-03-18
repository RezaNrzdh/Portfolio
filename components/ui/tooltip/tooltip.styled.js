import styled from 'styled-components';
import { Color, Radius, Typography } from '../..';

export const TooltipWrapper = styled.div`
    display: flex;
    position: relative;
    &:hover{
        div.tooltipbox{
            right: 40px;
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 32px;
    padding-left: 8px;
    padding-right: 8px;
    width: max-content;
    height: 24px;
    font-size: ${ Typography.body2.fontSize };
    border-radius: ${ Radius.xSmall };
    color: ${ Color.textColor.contrast };
    background-color: ${ Color.darkColor.main };
    transition: all cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.3s;
    visibility: hidden;
    opacity: 0;
    &::before{
        position: absolute;
        right: -6px;
        content: '';
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 6px solid ${ Color.darkColor.main };
    }
`;
