import { Header, Footer } from 'components/index';

const Layout = (props) => {
    return(
        <>
            <Header />
            { props.children }
            <Footer />
        </>
    );
}

export default Layout;