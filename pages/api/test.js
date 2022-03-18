import bcrypt from 'bcrypt';

const Handler = async(req, res) => {
    const {method, body} = req;
    const pass = await bcrypt.hash(body.password, 12);

    switch(method){
        case 'POST':
            res.json(pass);
            break;
    } 
}

export default Handler;