import Cookies from 'cookies';

const Handler = async(req, res) => { 
    const cookie = new Cookies(req,res);
    const jwt = cookie.get('jwt');
    

    if(jwt)
    {
        res.status(200).json(jwt);
    }
    else{
        res.status(200).json(false);
    }
}

export default Handler;