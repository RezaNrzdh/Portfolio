import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();

const UserProvider = (props) => {
    console.log('init context');
    const [userAuth, setUserAuth] = useState(false);

    useEffect(async()=> {
        console.log('start use effect');
        const fetch = await axios.get('/api/utils/cookies');
        console.log('axios cookie done');
        if(fetch.data){
            setUserAuth(true)
        }
        else{
            setUserAuth(false)
        }
    },[]);

    return(
        <userContext.Provider value={{userAuth, setUserAuth}}>
            { props.children }
        </userContext.Provider>
    );
}

export default UserProvider;