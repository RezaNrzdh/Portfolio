import Router from 'next/router';
import axios from "axios";
import { useState, useContext } from "react";
import AuthLayout from 'components/layouts/authLayout';
import { Alert } from 'components/index';
import { Wrapper } from 'views/auth/index';
import { userContext } from 'context/user';

const LoginPage = () => {

    const {userAuth, setUserAuth} = useContext(userContext);

    const [data] = useState({
        submit: 'CONTINUE',
        desc: "By entering the site, you can like the designes and comment on them.",
        btn: 'secondary',
        back: {
            label: "Don't have an account?",
            link: {
                key: 'SIGN UP',
                value: '/auth/register'
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

        // Hide alert box after every click on the Submit button
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

                //change UserContext Api after login
                setUserAuth({
                    ...userAuth,
                    login: true
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
        catch(error) {
            setAlert({
                type: 'danger',
                show: true,
                desc: '?????????? ???? ???????? ???????? ???????????? ???????? ????????'
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