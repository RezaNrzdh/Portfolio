import * as S from './cardList.styled';
import {Card} from 'components';

const CardList = ({data}) => {
    return(
        <S.CardListWrapper>
            {
                data.map((key, index) => {
                    return(<Card 
                        key={index}
                        src={key.images[0].src}
                        title={key.title}
                        author={key.author}
                        createAt={key.createAt}
                        slug={key.slug}
                    />)
                })
            }
        </S.CardListWrapper>
    );
}

export {CardList};