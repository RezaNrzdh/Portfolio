import Router from 'next/router';
import NProgress from 'nprogress';
import { GlobalStyle } from '../components/globalStyled';
import UserProvider from 'context/user';

NProgress.configure({ showSpinner: false });

function App ({Component, pageProps}) {
    return (
        <UserProvider>
            <GlobalStyle/>
            <Component {...pageProps} />
        </UserProvider>
    );
}

Router.onRouteChangeStart  = () => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => {
    NProgress.done();
}

Router.onRouteChangeError = () => {
    NProgress.done();
}

export default App;