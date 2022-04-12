import * as S from './wrapper.styled';
import Sidebar from './sidebar';

const Wrapper = () => {
    return(
        <S.WrapperStyled>
            <Sidebar />
        </S.WrapperStyled>
    );
}

export {Wrapper};