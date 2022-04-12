import Cookies from "cookies";

const Handler = async (req, res) => {

    const cookie = new Cookies(req, res);

    //SetHeader
    res.setHeader('Access-Control-Allow-Origin', process.env.DOMAIN);

    //Set Cookie for Delete
    cookie.set('jwt', null,{
        maxAge: 0,
        httpOnly: true
    });

    res.status(200).json({
        success: true
    });
}

export default Handler;