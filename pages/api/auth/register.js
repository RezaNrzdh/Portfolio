import dbConnect from "lib/dbConnect";
import userModel from "models/userModel";

const Handler = async (req, res) => {
    
    const { method, body } = req;

    // Check if email and password are exist
    if( !body.email || !body.password){
        return res.status(200).json({ 
            success: false, 
            error: 'لطفا ایمیل و پسورد را وارد کنید'
        });
    }
    
    await dbConnect();

    switch(method){
        case 'POST':
            try{
                const data = await userModel.create(body);
                res.status(200).json({
                    success: true,
                    data: data,
                    desc: 'اکانت کاربری شما با موفقیت ساخته شد'
                });
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