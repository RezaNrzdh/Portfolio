import { useRef } from 'react';
import Link from 'next/link';
import { Color } from 'components/utils/color';
import Icon from 'components/utils/icon';
import * as S from './profileMenu.styled';

const ProfileMenu = ({show}) => {

    const menuRef = useRef();

    return(
        <S.ProfileMenu show={show} ref={menuRef}>
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
                    <Link href=''>
                        <a>
                            <Icon icon='icon-logout' size='24' color={ Color.icon.main } />
                            <label>خروج</label>
                        </a>
                    </Link>
                </S.list>
            </S.UnorderedList>
        </S.ProfileMenu>
    );
}

export {ProfileMenu};