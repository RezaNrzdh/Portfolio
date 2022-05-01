import Icon from 'components/utils/icon';
import { Button } from 'components';
import * as S from './media.styled';

const Media = (props) => {
    return(
        <S.MediaWrapper>
            <S.HeroWrapper>
                <Button basic='light' iconOnly>
                    <Icon icon='icon-download' />
                </Button>
                <S.Hero src={ props.images[props.selected].src } />
                <S.NavigationWrapper>
                    <Button click={() => {props.prevBtn()}} basic='dark' type='outlined' iconOnly>
                        <Icon icon='icon-chevronleft' />
                    </Button>
                    <Button click={() => {props.nextBtn()}} basic='dark' type='outlined' iconOnly>
                        <Icon icon='icon-chevronright' />
                    </Button>
                </S.NavigationWrapper>
            </S.HeroWrapper>
            <S.MoreWrapper>
                {
                    props.images.map((key, index) => {
                       return(<S.MoreImages 
                                src={ key.src } 
                                id={index} 
                                key={index} 
                                onClick={() => {props.showImage(index)}}
                                selected = { props.selected == index ? true : null }
                            />);
                    })
                }
            </S.MoreWrapper>
        </S.MediaWrapper>
    );
}

export { Media };