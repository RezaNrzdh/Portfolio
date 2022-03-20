import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();

const UserProvider = (props) => {

    const [userAuth, setUserAuth] = useState(false);

    useEffect(async()=> {
        const fetch = await axios.get('/api/utils/cookies');
        if(fetch.data){
            setUserAuth(true)
        }
        else{
            setUserAuth(false)
        }
    });

    return(
        <userContext.Provider value={{userAuth, setUserAuth}}>
            { props.children }
        </userContext.Provider>
    );
}

export default UserProvider;