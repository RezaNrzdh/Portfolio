import * as S from './footer.styled';
import Container from '../../../hoc/container';
import {Color} from 'components/index';
import Icon from 'components/utils/icon';
import Link from 'next/link';

const Footer = () => {
    return(
        <S.FooterWrapper>
            <Container column>
                <S.LogoWrapper>
                    <img src='/icons/Logo.svg' />
                </S.LogoWrapper>
                <S.Description>
                    رضا نوروززاده هستم، طراح محصول و توسعه دهنده فرانت.
                    به دنیای کامپیوتر علاقه بسیار زیادی دارم، در زمینه طراحی وبسایت، بازیسازی،
                    گرافیک دو و سه بعدی فعالیت میکنم
                </S.Description>
                <S.SocialMediaWrapper>
                    <Link href=''>
                        <S.Anchor href='https://www.instagram.com/rezanrzdh/' target='_blank' ref='noreferrer'>
                            <Icon icon='icon-instagram' />
                        </S.Anchor>
                    </Link>
                    <Link href=''>
                        <S.Anchor>
                            <Icon icon='icon-dribbble' />
                        </S.Anchor>
                    </Link>
                    <Link href=''>
                        <S.Anchor>
                            <Icon icon='icon-googledrive' />
                        </S.Anchor>
                    </Link>
                    <Link href=''>
                        <S.Anchor>
                            <Icon icon='icon-linkedin' />
                        </S.Anchor>
                    </Link>
                </S.SocialMediaWrapper>
            </Container>
        </S.FooterWrapper>
    );
}

export { Footer };