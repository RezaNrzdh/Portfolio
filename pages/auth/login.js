import axios from "axios";
import { useState } from "react";
import AuthLayout from 'components/layouts/authLayout';
import { Alert } from 'components/index';
import { Wrapper } from 'views/auth/index';

const LoginPage = () => {

    const [data] = useState({
        submit: 'ورود به سایت',
        desc: 'با ورود به سایت می‌تونی طراحی ها رو لایک کنی و نظرت رو در موردشون بنویسی'
    });

    const [alert, setAlert] = useState({
        type: 'success',
        show: false,
        desc: null
    });

    const onHandlerSubmitButton = async(event) => {
        event.preventDefault();

        // Hide alert box after every click the Submit button
        alert.show ? setAlert({...alert, show: false}) : null;

        try{
            const response = await axios.post('/api/auth/login', { 
                email: event.target.email.value,
                password: event.target.password.value
            });

            if(response.data.success) {
                setAlert({
                    type: 'success',
                    show: true,
                    desc: response.data.desc
                });
            }
            else {
                setAlert({
                    type: 'danger',
                    show: true,
                    desc: response.data.error
                });
            }
        }
        catch(error) {
            setAlert({
                type: 'danger',
                show: true,
                desc: 'خطایی رخ داده است، دوباره تلاش کنید'
            });
        }   
    }

    return(
        <AuthLayout>
                <Alert type={ alert.type } show={ alert.show }>{ alert.desc }</Alert>
                <Wrapper click={ onHandlerSubmitButton } data={data} />
        </AuthLayout>
    );
}

export default LoginPage;