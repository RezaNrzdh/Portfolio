import * as S from './container.styled';

const Container = (props) => {
    return(
        <S.ContainerWrapper className='container'
            column = { props.column }
            between = { props.between }
            center = { props.center }
            middle = { props.middle }
        >
            { props.children }
        </S.ContainerWrapper>
    )
}

export default Container;