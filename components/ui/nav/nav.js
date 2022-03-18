import * as S from './nav.styled';
import Link from 'next/link';

const Nav = () => {
    return(
        <S.UnorderedList>
            <S.List>
                <Link href='#'>
                    <S.Anchor>نمونه کارهای من</S.Anchor>
                </Link>
            </S.List>
            <S.List>
                <Link href='/about'>
                    <S.Anchor>درباره من</S.Anchor>
                </Link>
            </S.List>
            <S.List>
                <Link href='#'>
                    <S.Anchor>تماس با من</S.Anchor>
                </Link>
            </S.List>
        </S.UnorderedList>
    );
}

export { Nav }