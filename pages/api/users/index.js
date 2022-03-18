import dbConnect from "lib/dbConnect";
import userModel from "models/userModel";

const Handler = async(req, res) => {

    const {method, body} = req;
    await dbConnect();

    switch(method){
        case 'GET':
            try{
                const getAllUsers = await userModel.find();
                res.status(200).json({ success: true, data: getAllUsers });
            }
            catch (error) {
                res.status(400).json({ success: false, error: error });
            }
            break;
    }
}

export default Handler;