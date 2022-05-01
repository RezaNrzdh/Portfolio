import * as S from './related.styled';
import Container from 'hoc/container';

const Related = () => {
    return(
        <S.RelatedWrapper>
            <Container column>
                <S.Title>You might also like</S.Title>
            </Container>
        </S.RelatedWrapper>
    );
}

export { Related };