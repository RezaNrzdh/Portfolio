import Link from 'next/link';
import Icon from 'components/utils/icon';
import * as S from './sidebar.styled';
import Tooltip from 'components/ui/tooltip/tooltip';

const Sidebar = () => {
    return(
        <S.SidebarWrapper>
            <S.SidebarSticky>
                <Tooltip title='به اشتراک بذار'>
                    <Link href=''>
                        <S.Anchor>
                            <Icon icon='icon-share' />
                        </S.Anchor>
                    </Link>
                </Tooltip>
                <Tooltip title='لایک کن'>
                    <Link href=''>
                        <S.Anchor>
                            <Icon icon='icon-like' />
                        </S.Anchor>
                    </Link>
                </Tooltip>
                <Tooltip title='نظرتو بگو'>
                    <Link href=''>
                        <S.Anchor>
                            <Icon icon='icon-comment' />
                        </S.Anchor>
                    </Link>
                </Tooltip>
            </S.SidebarSticky>
        </S.SidebarWrapper>
    );
}

export { Sidebar };