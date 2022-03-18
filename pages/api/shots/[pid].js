import dbConnect from '../../../lib/dbConnect';
import shotsModel from '../../../models/shotsModel';

const Handler = async (req, res) => {
    
    const { method, query } = req;

    await dbConnect();

    const shot = await shotsModel.findOne({ slug: { $regex: query.pid} });
    res.status(200).json(shot);
}

export default Handler;