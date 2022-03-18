import dbConnect from "lib/dbConnect";
import userModel from "models/userModel";

const Handler = async(req, res) => {

    const {method, body, query} = req;
    await dbConnect();

    switch(method){
        case 'GET':
            try{
                const getUser = await userModel.findOne({ _id: query.pid });
                res.status(200).json({ success: true, data: getUser });
            }
            catch (error) {
                res.status(400).json({ success: false, error: error });
            }
            break;
        case 'PUT':
            try{
                //code
            }
            catch(error) {
                //code
            }
            break;
        case 'DELETE':
            try{
                //code
            }
            catch(error) {
                //code
            }
            break;            
    }
}

export default Handler;