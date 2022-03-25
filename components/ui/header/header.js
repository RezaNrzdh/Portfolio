import React, { useContext } from 'react';
import Icon from 'components/utils/icon';
import Link from 'next/link';
import Container from 'hoc/container';
import { Nav, Color, Textbox, Button, ProfileMenu } from 'components/index';
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
                    <a><img src='/icons/Logo.svg' /></a>
                </Link>
                <Nav />
                <S.Search>
                    <Textbox placeholder='جستجو...' icon='icon-search' />
                </S.Search>
                <S.Auth>
                    {
                        userAuth
                            ?
                            <>
                                <Link href='/auth/login'>
                                    <a className='profileMenu'><Icon icon='icon-user' size='24' color={ Color.textColor.contrast } /></a>
                                </Link>
                                <ProfileMenu />
                            </>                         
                            :
                            <Button basic='primary' type='filled' click={AuthButtonClickHandler}>ورود / عضویت</Button>
                    }

                </S.Auth>
            </Container>
        </S.HeaderWrapper>
    );
});

export { Header };