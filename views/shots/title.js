import { Icon } from 'components';
import * as S from './title.styled';
import DateConverter from 'lib/dateConverter'; 
import { useEffect, useState } from 'react';

const Title = ({title, author, createAt}) => {

    //these two useState and useEffect are for fix 'React Hydration Error'
    const [locale, setLocale] = useState(createAt);
    useEffect(()=>{
        setLocale(DateConverter(locale));
    },[]);

    return(
        <S.TitleWrapper>
            <S.Headline>{ title }</S.Headline>
            <S.Details>
                <S.Author>
                    <Icon name='icon-user' />
                    <span>{ author }</span>
                </S.Author>
                <S.create>
                    <Icon name='icon-calendar' />
                    <span>{ locale }</span>
                </S.create>
            </S.Details>
        </S.TitleWrapper>
    );
}

export { Title };