import Head from 'next/head';
import axios from 'axios';
import { Categories, CardList, Hero } from 'views/index/index';
import Layout from 'components/layouts/layout';
import Container from 'hoc/container';
import tabs from 'lib/tabs';
import * as routes from 'lib/routes';

const HomePage = ({data}) => {

    return(
        <Layout>
            <Head>
                <title>رضا نوروز زاده | طراح محصول و توسعه دهنده وب</title>
            </Head>
            <Hero />
            <Container column>
                <Categories options={ tabs } />
                <CardList data={ data.cards } />
            </Container>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    const data = await axios.get(routes.findAllShots);
    return({
        props: {
            data: data.data
        }
    });
}

export default HomePage;