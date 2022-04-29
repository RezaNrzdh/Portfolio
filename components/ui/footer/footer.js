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
                    I'm Reza Norouz zadeh, I'm a UX Designer and Front-end Developer. I'm very interested in computer science. And I work
                    in the field of web design, app design, game development and 2D and 3D graphics.
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