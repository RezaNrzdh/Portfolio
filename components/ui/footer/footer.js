import * as S from './footer.styled';
import Container from '../../../hoc/container';
import { Color, Icon } from '../..';
import Link from 'next/link';

const Footer = () => {
    return(
        <S.FooterWrapper>
            <Container column>
                <S.LogoWrapper>
                    <Icon name='icon-logo' width='117' height='32' viewBox='0 0 117 32' fill={ Color.primaryColor.main } />
                </S.LogoWrapper>
                <S.Description>
                    رضا نوروززاده هستم، طراح محصول و توسعه دهنده فرانت.
                    به دنیای کامپیوتر علاقه بسیار زیادی دارم، در زمینه طراحی وبسایت، بازیسازی،
                    گرافیک دو و سه بعدی فعالیت میکنم
                </S.Description>
                <S.SocialMediaWrapper>
                    <Link href=''>
                        <S.Anchor href='https://www.instagram.com/rezanrzdh/' target='_blank' ref='noreferrer'>
                            <Icon name='icon-instagram' />
                        </S.Anchor>
                    </Link>
                    <Link href=''>
                        <S.Anchor>
                            <Icon name='icon-dribbble' />
                        </S.Anchor>
                    </Link>
                    <Link href=''>
                        <S.Anchor>
                            <Icon name='icon-googledrive' />
                        </S.Anchor>
                    </Link>
                    <Link href=''>
                        <S.Anchor>
                            <Icon name='icon-linkedin' />
                        </S.Anchor>
                    </Link>
                </S.SocialMediaWrapper>
            </Container>
        </S.FooterWrapper>
    );
}

export { Footer };