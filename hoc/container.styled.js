import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    display: flex;
    position: relative;
    width: 1280px;
    flex-direction: ${ props => props.column ? 'column' : null };
    justify-content: ${ props => props.center ? 'center' : null };
    justify-content: ${ props => props.between ? 'space-between' : null };
    align-items: ${ props => props.middle ? 'center' : null };
    align-items: center;
    height: inherit;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1280px) {
        width: 1194px;
    }

    @media (max-width: 1194px) {
        width: 1024px;
    }

    @media (max-width: 1024px) {
        width: 976px;
    }
`;