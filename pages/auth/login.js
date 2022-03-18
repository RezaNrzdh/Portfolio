import axios from "axios";
import { useState } from "react";
import AuthLayout from 'components/layouts/authLayout';
import { Wrapper } from 'views/auth/index';

const LoginPage = () => {

    const [data] = useState({
        submit: 'ورود به سایت',
        desc: 'با ورود به سایت می‌تونی طراحی ها رو لایک کنی و نظرت رو در موردشون بنویسی'
    });

    const onHandlerSubmitButton = async(event) => {
        event.preventDefault();
        try{
            const response = await axios.post('/api/auth/login', { 
                email: event.target.email.value,
                password: event.target.password.value
            });
            console.log(response.data);
        }
        catch(error) {
            console.log(error);
        }   
    }

    return(
        <AuthLayout>
                <Wrapper click={ onHandlerSubmitButton } data={data} />
        </AuthLayout>
    );
}

export default LoginPage;