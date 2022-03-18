import styled from 'styled-components';
import {Color, Radius, Shadow, Typography} from 'components/index';

export const HeroWapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 480px;
    background-image: url('/images/heroimage.jpg');
    background-position: center center;
    //background-image: linear-gradient(to right,#ECF2F6, #F8FAFC);
`;

export const HeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: inherit;
    margin-top: 148px;
    margin-right: 64px;
    .hi{
        font-size: ${ Typography.headline1.fontSize };
        color: ${ Color.textColor.primary };
    }
    .myname{
        display: flex;
        align-items: center;
        h1{
            font-size: 48px;
            margin-left: 16px;
            color: ${ Color.secondaryColor.main };
        }
        span{
            font-size: ${ Typography.headline1.fontSize };
            color: ${ Color.textColor.primary };
        }
    }
`;

export const HeroTitleButtons = styled.div`
    display: flex;
    button{
        &:first-child{
            margin-left: 16px;
        }
    }
`;

export const HeroImage = styled.div`
    display: flex;
    width: 50%;
    height: inherit;
    margin-left: 64px;
`;

export const Skills = styled.div`
    display: flex;
    align-self: flex-end;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-56px);
    width: 780px;
    height: 112px;
    background-color: ${ Color.surfaceColor.light };
    border-width: 1px;
    border-style: solid;
    border-color: ${ Color.strokeColor.main };
    box-shadow: ${ Shadow.xLarge };
    border-radius: 78px;
    z-index: 990;
`;

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    margin: auto;
    width: 700px;
    height: inherit;
`;

export const Column = styled.div`
    display: flex;
    align-items: center;
     &::before{
         display: flex;
         content: '';
         margin-left: 24px;
         width: 1px;
         height: 64px;
         background-image: linear-gradient(#ffffff, #E3E4E6, #ffffff);
     }
     &:first-child{
        &::before{
            display: none;
        }
     }
`;

export const SkillIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    background-image: linear-gradient(#E3E4E6, #ffffff);
    border-radius: ${ Radius.medium };
`;

export const Info = styled.div`
    display: flex;
    margin-right: 16px;
    flex-direction: column;
    color: ${ Color.textColor.primary };
`;

export const Label = styled.label`
    font-size: ${ Typography.subtitle1.fontSize };
    font-weight: ${ Typography.subtitle1.fontWeight };
`;

export const Span = styled.span`
    font-size: ${ Typography.caption.fontSize };
`;