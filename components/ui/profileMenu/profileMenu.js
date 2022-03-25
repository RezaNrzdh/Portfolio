import Link from 'next/link';
import { Color } from 'components/utils/color';
import Icon from 'components/utils/icon';
import * as S from './profileMenu.styled';

const ProfileMenu = () => {
    return(
        <S.ProfileMenu>
            <S.UnorderedList>
                <S.list>
                    <Link href=''>
                        <a>
                            <Icon icon='icon-user' />
                            <label>پروفایل</label>
                        </a>
                    </Link>
                </S.list>
                <S.list>
                    <Link href=''>
                        <a>
                            <Icon icon='icon-user' color={ Color.icon.main } />
                            <label>داشبورد</label>
                        </a>
                    </Link>                            
                </S.list>
                <S.list>
                    <Link href=''>
                        <a>
                            <Icon icon='icon-user' color={ Color.icon.main } />
                            <label>خروج</label>
                        </a>
                    </Link>
                </S.list>
            </S.UnorderedList>
        </S.ProfileMenu>
    );
}

export {ProfileMenu};