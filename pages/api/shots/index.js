import dbConnect from "lib/dbConnect";
import shotsModel from "models/shotsModel";

const Handler = async (req, res) => {
    
    const {method, body} = req;

    //Set Header
    res.setHeader('Access-Control-Allow-Origin', process.env.DOMAIN);

    await dbConnect();

    switch(method) {
        case 'GET':
            try{
                const getAllShots = await shotsModel.find().sort({ _id: -1 });
                res.status(200).json({
                    success: true,
                    cards: getAllShots,
                });
            }
            catch(error){
                res.status(400).json({ 
                    success: false,
                    error: error
                });
            }
            break;
        case 'POST':
            try{
                const createNewShot = await shotsModel.create(body);
                if(createNewShot != null){
                    res.status(200).json({
                        success: true,
                        data: createNewShot,
                        desc: 'پست جدید با موفقیت ثبت شد'
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
                
            }
            break;
    }
}

export default Handler;