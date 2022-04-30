const DateConverter = (props) => {
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    let localeDate  = new Date(props).toLocaleDateString('en-US', options);
    return localeDate;
}

export default DateConverter;