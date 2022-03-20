import { Header, Footer } from 'components/index';
import UserProvider from 'context/user';

const Layout = (props) => {

    return(
        <UserProvider>
            <Header />
            { props.children }
            <Footer />
        </UserProvider>
    );
}

export default Layout;