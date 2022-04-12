import React, { useEffect, useContext, useState, useRef } from 'react';
import Icon from 'components/utils/icon';
import Link from 'next/link';
import Container from 'hoc/container';
import { Nav, Color, Textbox, Button, ProfileMenu } from 'components/index';
import { userContext } from 'context/user';
import * as S from './header.styled';


const Header = React.memo(() => {

    const {userAuth} = useContext(userContext);

    // useState for SHOW & HIDE profile menu
    const [profileMenu, setpProfileMenu] = useState(false);

    // Click handler for open login page
    const AuthButtonClickHandler = () => {
        window.open('/auth/login','_self');
    }

    // Click Handler for switch between Hide and Show
    const ProfileMenuClickHandler = () => {
        setpProfileMenu(!profileMenu);
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
                                <Button basic='primary' type='filled' click={ProfileMenuClickHandler}>
                                    <Icon icon='icon-user' size='24' />
                                </Button>
                                <ProfileMenu show={profileMenu} profileMenu={profileMenu} setpProfileMenu={setpProfileMenu}/>
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