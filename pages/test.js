import axios from 'axios';
import { useEffect } from 'react';

const TestPage = () => {

    useEffect(async() => {
        const fetch = await axios.get('/api/utils/cookies');
    })

    return(
        <>Test page</>
    );
}

export default TestPage;