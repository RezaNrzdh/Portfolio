import { Color, Icon } from '../../index';
import * as S from './textbox.style';

const Textbox = ({placeholder, icon, type, id, name, minlength}) => {
    return(
        <S.FieldWrapper>
            <S.Field 
                id={id} 
                name={name} 
                placeholder={placeholder} 
                type={type}
                minLength={minlength} 
                outlined>
            </S.Field>
            {
                icon ?
                <S.Anchor>
                    <Icon name={ icon } fill={ Color.icon.main } />
                </S.Anchor>
                : null 
            }

        </S.FieldWrapper>
    );
}

export { Textbox }