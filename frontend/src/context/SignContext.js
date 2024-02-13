import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){

    let myToken = localStorage.getItem("myToken");

    const [logged, setLogged] = useState((myToken ? true : false));

    

    const togglelog = () => {
        if(myToken){
            setLogged(logged ? false : true);  
        } else {
            setLogged(false);
        }
    }

    return(
        <UserContext.Provider value={{logged, togglelog}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;