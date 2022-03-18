import * as S from './tooltip.styled';

const Tooltip = (props) => {
    return(
        <S.TooltipWrapper>
            { props.children }
            <S.Box className='tooltipbox'>
                { props.title }
            </S.Box>
        </S.TooltipWrapper>
    );
}

export default Tooltip;