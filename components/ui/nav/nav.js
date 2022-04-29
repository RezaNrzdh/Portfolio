import * as S from './nav.styled';
import Link from 'next/link';

const Nav = () => {
    return(
        <S.UnorderedList>
            <S.List>
                <Link href='#'>
                    <S.Anchor>Portfolio</S.Anchor>
                </Link>
            </S.List>
            <S.List>
                <Link href='/about'>
                    <S.Anchor>About</S.Anchor>
                </Link>
            </S.List>
            <S.List>
                <Link href='#'>
                    <S.Anchor>Contact</S.Anchor>
                </Link>
            </S.List>
        </S.UnorderedList>
    );
}

export { Nav }