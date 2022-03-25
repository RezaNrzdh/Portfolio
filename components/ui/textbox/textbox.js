import Icon from 'components/utils/icon';
import { Color } from '../../index';
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
                    <Icon icon={ icon } size={24} color={ Color.icon.main } />
                </S.Anchor>
                : null 
            }

        </S.FieldWrapper>
    );
}

export { Textbox }