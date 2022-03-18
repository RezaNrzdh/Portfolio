import styled, { keyframes } from 'styled-components';
import { Radius, Color, Typography } from 'components/index';

const FadeIn = keyframes`
    0%   { opacity: 0; top: 40px; transform: scale(0.8,0.8) }
    100% { opacity: 1; top: 50px; transform: scale(1,1) }
`;

export const AlertWrapper = styled.div`
    display: ${ props => props.show ? 'flex' : 'none' };
    position: absolute;
    top: 50px;
    padding-right: 16px;
    padding-left: 16px;
    box-sizing: border-box;
    align-items: center;
    width: 400px;
    height: 40px;
    animation-name: ${ FadeIn };
    animation-duration: 0.3s;
    border-radius: ${ Radius.small };
`;

export const Title = styled.label`
    margin-right: 8px;
    color: ${ Color.dangerColor.contrast };
    font-size: ${ Typography.body2.fontSize };
`;

export const icon = styled.div``;

export const AlertDanger = styled(AlertWrapper)`
    background-color: ${ Color.dangerColor.main };
`;

export const AlertSuccess = styled(AlertWrapper)`
    background-color: ${ Color.successColor.main };
`;

export const AlertWarning = styled(AlertWrapper)`
    
`;

export const AlertInfo = styled(AlertWrapper)`
    
`;
