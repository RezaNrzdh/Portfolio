import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Layout from 'components/layouts/layout';
import Container from 'hoc/container';
import {Title,Media,Desc,Related,Sidebar} from 'views/shots/index';

const ShotsPage = ({ data }) => {

    const [imageState, setImageState] = useState({
        images: data.images,
        seleted: 0
    });

    const DownloadHandler = () => {
        window.open(imageState.images[imageState.seleted].src);
    }

    const ShowImageHandler = (event) => {
        setImageState({
            ...imageState,
            seleted: event
        })
    }

    const NextNavigationHandler = () => {
        if((imageState.images.length - 1) != imageState.seleted){
            setImageState({
                ...imageState,
                seleted: imageState.seleted + 1
            });
        }
    }

    const PrevNavigationHandler = () => {
        if(imageState.seleted != 0) {
            setImageState({
                ...imageState,
                seleted: imageState.seleted - 1
            });
        }
    }

    return(
        <Layout>
            <Head>
                <title>{ data.title }</title>
            </Head>
            <Container column>
                <Sidebar/>
                <Title title={data.title} author={data.author} createAt={data.createAt} />
                <Media 
                    images={data.images} 
                    selected={imageState.seleted} 
                    showImage={ShowImageHandler} 
                    nextBtn={NextNavigationHandler} 
                    prevBtn={PrevNavigationHandler}
                    downloadImage={DownloadHandler} />
                <Desc desc={data.description} />
            </Container>
            <Related />
        </Layout>
    );
}

export const getServerSideProps =  async (context) => {
    const data = await axios.get(`${process.env.DOMAIN}/api/shots/${context.params.pid}`);
    return{
        props: {
            data: data.data
        }
    }
}

export default ShotsPage;