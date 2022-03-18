import * as S from './categories.styled';
import { Button } from 'components/index';

const Categories = (props) => {
    return(
        <S.CategoriesWrapper>
            {
                props.options.map((key, index) => {
                    return <Button
                                key={index}
                                basic={ key.basic }
                                type={ key.type }
                                >
                                { key.name }
                            </Button>
                })
            }        
        </S.CategoriesWrapper>
    );
}

export { Categories }