import dbConnect from "lib/dbConnect";
import shotsModel from "models/shotsModel";

const Handler = async (req, res) => {

    const {method, body} = req;

    await dbConnect();

    try{
        const getRelatedShots = await shotsModel
            .find({ tags: 'reza' })
            .sort({ _id: -1 })
            .limit(4);
            
        res.status(200).json({
            success: true,
            data: getRelatedShots
        });
    }
    catch(error){
        res.status(200).json({
            success: false,
            error:  error
        });
    }
}

export default Handler;