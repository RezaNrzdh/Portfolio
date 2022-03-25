import Icon from 'components/utils/icon';
import { Color, Textbox, Button } from 'components/index';
import * as S from './wrapper.styled';
import Link from 'next/link';

const Wrapper = (props) => {
    return(
        <S.Wrapper>
            <S.Welcome>خوش اومدی به</S.Welcome>
            <Link href='/'>
                <a><img src='/icons/Logo.svg' /></a>
            </Link>
            <S.Desc>{ props.data.desc }</S.Desc>
            <form onSubmit={props.click}>
                <S.Label htmlFor='email'>نام کاربری / ایمیل</S.Label>
                <Textbox id='email' name='email' type='email' />
                <S.Label htmlFor='email'>رمز عبور</S.Label>
                <Textbox id='password' name='password' type='password' minlength="4" />
                <Button basic={props.data.btn} type='filled' submit='submit'>{ props.data.submit }</Button>
            </form>
            <S.BackWrapper>
                <label>{props.data.back.label}</label>
                <Link href={props.data.back.link.value}>
                    <a>{props.data.back.link.key}</a>
                </Link>
            </S.BackWrapper>
        </S.Wrapper>
    );
}

export { Wrapper }