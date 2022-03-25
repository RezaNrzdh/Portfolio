import Icon from 'components/utils/icon';
import * as S from './hero.styled';
import { Button } from 'components';
import { useState } from 'react';
import Container from 'hoc/container';

const Hero = () => {

    const [data] = useState([
        {
            icon: <img src='/images/uiux.svg' />,
            title: 'طراح محصول',
            desc: '6 سال سابقه کار حرفه ای'
        },
        {
            icon: <img src='/images/frontend.svg' />,
            title: 'توسعه دهنده فرانت',
            desc: 'HTML, CSS, ReactJs'
        },
        {
            icon: <img src='/images/graphic.svg' />,
            title: 'گرافیست',
            desc: 'دو بعدی و سه بعدی'
        }
    ]);

    return(
        <S.HeroWapper>
            <Container>
                <S.HeroTitle>
                    <div className='hi'>سلام</div>
                    <div className='myname'>
                        <h1>John Doe</h1>
                        <span>هستم</span>
                    </div>
                    <p>طراح محصول و توسعه دهنده فرانت. به دنیای کامپیوتر علاقه بسیار زیادی دارم، در زمینه طراحی وبسایت، بازیسازی، گرافیک دو و سه بعدی فعالیت میکنم.</p>
                    <S.HeroTitleButtons>
                        <Button basic='primary' type='filled' className='one'>درباره من</Button>
                        <Button basic='dark' type='outlined'>رزومه</Button>
                    </S.HeroTitleButtons>
                </S.HeroTitle>
            </Container>
            <S.Skills>
                <S.SkillsContainer>
                    {
                        data.map((columns, index) => {
                            return(
                                <S.Column key={ index }>
                                    <S.SkillIcon>{ columns.icon }</S.SkillIcon>
                                    <S.Info>
                                        <S.Label>{ columns.title }</S.Label>
                                        <S.Span>{ columns.desc }</S.Span>
                                    </S.Info>
                                </S.Column>
                            )
                        })
                    }
                </S.SkillsContainer>
            </S.Skills>
        </S.HeroWapper>
    );
}

export { Hero }