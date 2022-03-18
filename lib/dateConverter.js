const DateConverter = (props) => {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let localeDate  = new Date(props).toLocaleDateString('fa-IR', options);
    return localeDate;
}

export default DateConverter;