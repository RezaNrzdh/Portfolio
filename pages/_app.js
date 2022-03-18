import Router from 'next/router';
import NProgress from 'nprogress';
import { GlobalStyle } from '../components/globalStyled';

NProgress.configure({ showSpinner: false });

function App ({Component, pageProps}) {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
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