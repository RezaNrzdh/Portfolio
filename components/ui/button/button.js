import * as S from './button.styled';

const Button = (props) => {
    if( props.type === 'filled'){
        switch(props.basic){
            case 'primary': 
                return <S.PrimaryFilled 
                            onClick={props.click} 
                            iconOnly={props.iconOnly} 
                            type={props.submit}
                        >
                            { props.children }
                        </S.PrimaryFilled>;
            case 'secondary': 
                return <S.SecondaryFilled 
                            onClick={props.click} 
                            icnOnly={props.iconOnly} 
                            type={props.submit}
                        >
                            { props.children }
                        </S.SecondaryFilled>;
            case 'dark': 
                return <S.DarkFilled 
                            onClick={props.click} 
                            iconOnly={props.iconOnly} 
                            type={props.submit}
                        >
                           { props.Linkchildren }
                        </S.DarkFilled>;
        }
    }
    else if(props.type === 'outlined') {
        switch(props.basic){
            case 'primary': 
                return <S.PrimaryOutlined 
                            onClick={props.click} 
                            iconOnly={props.iconOnly} 
                            type={props.submit}
                        >
                            { props.children }
                        </S.PrimaryOutlined>;
            case 'secondary': 
                return <S.SecondaryOutlined 
                            onClick={props.click}
                            icnOnly={props.iconOnly} 
                            type={props.submit}
                        >
                            { props.children }
                        </S.SecondaryOutlined>;
            case 'dark': 
                return <S.DarkOutlined 
                            onClick={props.click} 
                            iconOnly={props.iconOnly} 
                            type={props.submit}
                        >
                            { props.children }
                        </S.DarkOutlined>;
        }
    }
    else {
        switch(props.basic){
            case 'link': 
                return <S.Link 
                            onClick={props.click} 
                            iconOnly={props.iconOnly} 
                            type={props.submit}
                        >
                            { props.children }
                        </S.Link>;
            case 'light': 
                return <S.Light 
                            onClick={props.click} 
                            iconOnly={props.iconOnly} 
                            type={props.submit}
                        >
                            { props.children }
                        </S.Light>;
        }
    }
}

export { Button }