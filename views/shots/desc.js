import * as S from './desc.styled';

const Desc = (props) => {
    return(
        <S.DescWrapper>
            { props.desc }
        </S.DescWrapper>
    );
}

export { Desc };