import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '../..';
import * as S from './card.styled';
import DateConverter from '../../../lib/dateConverter'

const Card = ({slug, src, title, author, createAt}) => {

    //these two useState and useEffect are for fix 'React Hydration Error'
    const [locale, setLocale] = useState(createAt);
    useEffect(() => {
        setLocale(DateConverter(locale));
    },[]);

    return(
        <Link href={`/shots/${slug}`}>
            <S.CardWrapper>
                <S.ImageWrapper>
                    <Image src={ src } alt='' layout='fill'/>
                </S.ImageWrapper>
                <S.CardBodyInfo>
                    <S.Title>{ title }</S.Title>
                    <S.CardDetail>
                        <div>
                            <S.Author>
                                <Icon name='icon-user' />
                                <S.Span>{ author }</S.Span>
                            </S.Author>
                            <S.Create>
                                <Icon name='icon-calendar' />
                                <S.Span>{ locale }</S.Span>
                            </S.Create>
                        </div>
                    </S.CardDetail>
                </S.CardBodyInfo>
            </S.CardWrapper>        
        </Link>
    );
}

export { Card };