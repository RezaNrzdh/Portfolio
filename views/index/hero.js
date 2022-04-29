import Icon from 'components/utils/icon';
import * as S from './hero.styled';
import { Button } from 'components';
import { useState } from 'react';
import Container from 'hoc/container';

const Hero = () => {

    const [data] = useState([
        {
            icon: <img src='/images/uiux.svg' />,
            title: 'UX DESIGNER',
            desc: "6 years of professional experience"
        },
        {
            icon: <img src='/images/frontend.svg' />,
            title: 'WEB DEVELOPER',
            desc: 'Ability to work with ReactJs, NodeJs and Mongodb'
        },
        {
            icon: <img src='/images/graphic.svg' />,
            title: '2D/3D GRAPHICS',
            desc: 'Ability to work with Adobe Photoshop and Illustrator'
        }
    ]);

    return(
        <S.HeroWapper>
            <Container>
                <S.HeroTitle>
                    <div className='hi'>Hi, I Am!</div>
                    <div className='myname'>
                        <h1>Reza Norouz zadeh</h1>
                    </div>
                    <p>طراح محصول و توسعه دهنده فرانت. به دنیای کامپیوتر علاقه بسیار زیادی دارم، در زمینه طراحی وبسایت، بازیسازی، گرافیک دو و سه بعدی فعالیت میکنم.</p>
                    <S.HeroTitleButtons>
                        <Button basic='primary' type='filled' className='one'>About me</Button>
                        <Button basic='dark' type='outlined'>Resume</Button>
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