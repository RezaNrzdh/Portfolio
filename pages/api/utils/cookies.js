import Cookies from 'cookies';
import jwt from 'jsonwebtoken';

const Handler = async(req, res) => { 
    const cookie = new Cookies(req,res);
    const jwtCookie = cookie.get('jwt');

    // Verify token with Signature
    try{
        const verify = jwt.verify(jwtCookie, process.env.JWT_SECRET);
        res.status(200).json(verify);
    }
    catch(error){
        res.status(200).json(false);
    }
}

export default Handler;