

import { useState, useEffect, useContext } from "react";
import { getUserByUserId } from "../services/firebase";
import UserContext from "../context/user";

export default function useUser() {
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);
    useEffect(() => {
        async function getUserObjByUserId() {
            const [response] = await getUserByUserId(user.uid);
            setActiveUser(response); // pass the user response to the state of activeUser
        }
        if (user && user.uid) {
            getUserObjByUserId();
        }
    }, [user]);
    console.log(activeUser);
    
    return { user: activeUser }; 
}
   
   
    