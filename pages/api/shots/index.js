import dbConnect from "lib/dbConnect";
import shotsModel from "models/shotsModel";

const Handler = async (req, res) => {
    
    await dbConnect();
    const shotsList = await shotsModel.find();

    const data = {
        success: true,
        cards: shotsList,
    }
    res.status(200).json(data);
}

export default Handler;