import React, { useContext } from 'react';
import Link from 'next/link';

import Container from 'hoc/container';
import { Icon, Nav, Color, Textbox, Button } from 'components/index';
import { userContext } from 'context/user';

import * as S from './header.styled';


const Header = React.memo(() => {

    const {userAuth} = useContext(userContext);

    const AuthButtonClickHandler = () => {
        window.open('/auth/login','_self');
    }

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
                    {
                        !userAuth
                            ?
                            <Button basic='primary' type='filled' click={AuthButtonClickHandler}>ورود / عضویت</Button>
                            :
                            <Link href='/auth/login'>
                                <a><Icon name='icon-user' fill={ Color.icon.main } /></a>
                            </Link>
                    }

                </S.Auth>
            </Container>
        </S.HeaderWrapper>
    );
});

export { Header };