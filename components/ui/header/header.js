import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Icon from 'components/utils/icon';
import Container from 'hoc/container';
import { Nav, Textbox, Button, ProfileMenu } from 'components/index';
import { userContext } from 'context/user';
import * as S from './header.styled';
import axios from 'axios';


const Header = React.memo(() => {

    const {userAuth, setUserAuth} = useContext(userContext);

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

    const LogoutHandler = async () => {
        await axios.get('/api/auth/logout');
        setUserAuth(false);
        Router.push('/');
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
                        userAuth.login
                            ?
                            <>
                                <Button basic='primary' type='filled' iconOnly click={ProfileMenuClickHandler}>
                                    <Icon icon='icon-user' size='24' />
                                </Button>
                                <ProfileMenu 
                                    show={profileMenu} 
                                    profileMenu={profileMenu} 
                                    setpProfileMenu={setpProfileMenu}
                                    click={LogoutHandler}/>
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