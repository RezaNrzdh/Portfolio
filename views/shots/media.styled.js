import styled from "styled-components";
import { Color, Radius, Shadow } from "components";

export const MediaWrapper = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 800px;
`;

export const HeroWrapper = styled.div`
    display: flex;
    position: relative;
    width: 800px;
    height: 600px;
    & > button{
        position: absolute;
        right: 24px;
        top: 24px;
    }
`;

export const Hero = styled.img`
    display: flex;
    width: 800px;
    height: 600px;
    background-color: ${ Color.strokeColor.main };
    border-radius: ${ Radius.medium };
    border: 1px solid ${ Color.strokeColor.main };
`;

export const NavigationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: -64px;
    top:calc(50% - 20px);
    width: 928px;
    height: 40px;
`;

export const MoreWrapper = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto auto;
    grid-column-gap: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
`;

export const MoreImages = styled.img`
    display: flex;
    width: 100px;
    height: 75px;
    background-color: ${ Color.strokeColor.main };
    border-style: solid;
    border-width: ${ props => props.selected ? '2px' : '1px' };
    border-color: ${ props => props.selected ? Color.primaryColor.main : Color.strokeColor.main };
    border-radius: ${ Radius.small };
    cursor: pointer;
    &:hover{
        border-color: ${ Color.secondaryColor.main };
        box-shadow: ${ Shadow.large };
    }
`;