const Shadow = {
    small: '0 1px 3px rgba(0,0,0,0.04)',
    medium: '0 3px 6px rgba(0,0,0,0.04)',
    large: '0 6px 12px rgba(0,0,0,0.04)',
    xLarge: '0 12px 24px rgba(0,0,0,0.04)'
}

const ShadowCustom = (x='0', y='3', blur='6', opacity='4') => {
    return x + 'px ' + y + 'px ' + blur + 'px ' + 'rgba(0,0,0,' + (opacity/100) + ')';
}

export { Shadow, ShadowCustom };
