import Cookies from "cookies";

const GetCookie = async(req, res) => {

    const cookies = new Cookies(req, res);
    res.json(cookies.get('jwt'));
}

export default GetCookie;