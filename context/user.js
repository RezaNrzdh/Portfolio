import { createContext, useState, useEffect } from "react";

export const userContext = createContext();

const UserProvider = (props) => {

    const [userAuth, setUserAuth] = useState(false);

    return(
        <userContext.Provider value={{userAuth, setUserAuth}}>
            { props.children }
        </userContext.Provider>
    );
}

export default UserProvider;