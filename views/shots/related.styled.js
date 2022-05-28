import { Color, Typography } from 'components';
import styled from 'styled-components';

export const RelatedWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    .container{
        border-top: 1px solid ${ Color.strokeColor.main };
        padding-top: 24px; 
    }
`;

export const Title = styled.h2`
    align-self: baseline;
    color: ${ Color.textColor.primary };
    font-size: ${ Typography.headline3.fontSize };
    font-weight: ${ Typography.headline3.fontWeight };
`;

export const CardList = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 24px;
    background-color: red;
`;