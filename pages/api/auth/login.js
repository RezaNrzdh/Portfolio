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
    if(!body.email || !body.password) {
        return res.status(200).json({ 
            success: false,
            error: 'لطفا ایمیل و پسورد را وارد کنید'
        });
    }

    await dbConnect();

    switch(method){
        case 'POST':
            try{                
                // Check if Email is exist in DB
                const getUserLogin = await userModel.findOne(
                    { email: body.email }
                );

                // Compare current password with currect password in DB
                const comparePassword = await getUserLogin.comparePassword(body.password, getUserLogin.password);

                // Check if Email is exist and password is corrent
                if(getUserLogin !== null && comparePassword) {
                    const token = jwt.sign(
                        { id: getUserLogin._id, role: getUserLogin.role },
                        process.env.JWT_SECRET, 
                        { expiresIn: process.env.JWT_EXPIRES_IN });

                    cookie.set('jwt', token, {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRESS_IN * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    });

                    res.status(200).json({ 
                        success: true,
                        token,
                        data: getUserLogin,
                        desc: 'اکانت کاربری شما با موفقیت وارد شد'
                    });
                }
                else {
                    res.status(200).json({ 
                        success: false,
                        error: 'ایمیل یا رمز عبور اشتباه است'
                    });
                }
            }
            catch(err){
                res.status(200).json({
                    success: false,
                    error: 'خطایی رخ داده است، دوباره تلاش کنید'
                });
            }
            break;
    }
}

export default Handler;