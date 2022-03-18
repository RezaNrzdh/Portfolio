import Link from 'next/link';
import * as S from './header.styled';
import Container from '../../../hoc/container';
import { Icon, Nav, Color, Textbox } from '../../index';
import React from 'react';

const Header = React.memo(() => {
    return(
        <S.HeaderWrapper>
            <Container>
                <Link href='/'>
                    <a><Icon name='icon-logo' width='117' height='32' viewBox='0 0 117 32' fill={ Color.primaryColor.main } /></a>
                </Link>
                <Nav />
                <S.Search>
                    <Textbox placeholder='جستجو...' icon='icon-search' />
                </S.Search>
                <S.Auth>
                    <Icon name='icon-user' fill={ Color.icon.main } />
                </S.Auth>
            </Container>
        </S.HeaderWrapper>
    );
});

export { Header };