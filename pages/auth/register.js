import { useState } from "react";
import Router from 'next/router'
import axios from 'axios';
import AuthLayout from 'components/layouts/authLayout';
import { Alert } from 'components/index';
import { Wrapper } from 'views/auth/index';

const RegisterPage = () => {

    const [data] = useState({
        submit: 'عضویت در سایت',
        desc: 'با عضویت در سایت می‌تونی طراحی ها رو لایک کنی و نظرت رو در موردشون بنویسی',
        back: {
            label: 'قبلا عضو شدی؟',
            link: {
                key: 'همین الان لاگین شو',
                value: '/auth/login'
            }
        }
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
            const response = await axios.post('/api/auth/register', {
                email: event.target.email.value,
                password: event.target.password.value
            });

            if(response.data.success) {
                setAlert({
                    type: 'success',
                    show: true,
                    desc: response.data.desc
                });
                const redirect = setTimeout(() => {
                    clearTimeout(redirect);
                    Router.push('/');
                }, 2500);
            }
            else {
                setAlert({
                    type: 'danger',
                    show: true,
                    desc: response.data.error
                });
            }
        }
        catch (error){
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

export default RegisterPage;