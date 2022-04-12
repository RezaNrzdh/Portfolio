import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Color } from 'components/utils/color';
import Icon from 'components/utils/icon';
import * as S from './profileMenu.styled';
import axios from 'axios';

const ProfileMenu = (props) => {

    const menuRef = useRef();

    useEffect(() => {
        if(props.profileMenu){
            document.addEventListener('click', OutsideClickHandler);
            return () => {
                document.removeEventListener('click', OutsideClickHandler);
            };
        }
    },[props.profileMenu]);

    const OutsideClickHandler = (event) => {
        if(menuRef.current && !menuRef.current.contains(event.target)){
            props.setpProfileMenu(false);
        }
    }

    const LogoutHandler = async () => {
        await axios.get('/api/auth/logout');
        props.setUserAuth(false);
        Router.push('/');
    }

    return(
        <S.ProfileMenu show={props.show} ref={menuRef}>
            <S.UnorderedList>
                <S.list>
                    <Link href=''>
                        <a>
                            <Icon icon='icon-profile' size='24' color={Color.icon.main} />
                            <label>پروفایل</label>
                        </a>
                    </Link>
                </S.list>
                <S.list>
                    <Link href=''>
                        <a>
                            <Icon icon='icon-dashboard' size='24' color={ Color.icon.main } />
                            <label>داشبورد</label>
                        </a>
                    </Link>                            
                </S.list>
                <S.list>
                    <button onClick={LogoutHandler}>
                        <Icon icon='icon-logout' size='24' color={ Color.icon.main } />
                        <label>خروج</label>
                    </button>
                </S.list>
            </S.UnorderedList>
        </S.ProfileMenu>
    );
}

export {ProfileMenu};