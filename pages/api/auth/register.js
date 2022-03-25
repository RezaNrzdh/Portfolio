import dbConnect from "lib/dbConnect";
import userModel from "models/userModel";
import jwt from 'jsonwebtoken';
import Cookies from 'cookies';

const Handler = async (req, res) => {
    
    const { method, body } = req;
    const cookie = new Cookies(req, res);

    // Set Headers
    res.setHeader("Access-Control-Allow-Origin", process.env.DOMAIN);

    // Check if email and password are exist
    if(!body.email || !body.password){
        return res.status(200).json({ 
            success: false, 
            error: 'لطفا ایمیل و پسورد را وارد کنید'
        });
    }
    
    await dbConnect();

    switch(method){
        case 'POST':
            try{
                // Create new User
                const data = await userModel.create(body);

                // Check if Data is OK
                if(data !== null){
                    // Create jwt Signature
                    const token = jwt.sign(
                        { id: data._id, role: data.role },
                        process.env.JWT_SECRET, 
                        { expiresIn: process.env.JWT_EXPIRES_IN });
                        
                    // Create Cookie
                    cookie.set('jwt', token, {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRESS_IN * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    });
                    // Response data to the Client
                    res.status(200).json({
                        success: true,
                        token,
                        data: data,
                        desc: 'اکانت کاربری شما با موفقیت ساخته شد'
                    });
                }
                else{
                    res.status(200).json({ 
                        success: false,
                        error: 'خطایی رخ داده است، دوباره تلاش کنید'
                    });
                }

            }
            catch(err){
                res.status(200).json({
                    success: false,
                    error: 'ایمیل از قبل ساخته شده است'
                });
            }

            break;
            
    }
}

export default Handler;