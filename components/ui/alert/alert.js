import Icon from 'components/utils/icon';
import * as S from './alert.styled';

const Alert = (props) => {
    switch(props.type){
        case 'danger':
            return <S.AlertDanger show={ props.show }>
                        <Icon icon='icon-like' size='24' color='#ffffff' />
                        <S.Title>{ props.children }</S.Title>
                   </S.AlertDanger>;
        case 'success':
            return <S.AlertSuccess show={ props.show }>
                        <Icon icon='icon-user' size='24' color='#ffffff' />
                        <S.Title>{ props.children }</S.Title>
                   </S.AlertSuccess>;
        case 'warning':
            return <S.AlertWarning show={ props.show }>
                        <Icon icon='icon-like' size='24' color='#ffffff' />
                        <S.Title>{ props.children }</S.Title>
                   </S.AlertWarning>;
        case 'info':
            return <S.AlertInfo show={ props.show }>
                        <Icon icon='icon-like' size='24' color='#ffffff' />
                        <S.Title>{ props.children }</S.Title>
                   </S.AlertInfo>;
    }
}

export { Alert };