import * as S from './related.styled';
import Container from 'hoc/container';

const Related = ({ data }) => {
    return(
        <S.RelatedWrapper>
            <Container column>
                <S.Title>You might also like</S.Title>
                <S.CardList>
                    {

                    }
                </S.CardList>
            </Container>
        </S.RelatedWrapper>
    );
}

export { Related };