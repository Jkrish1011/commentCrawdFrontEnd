import { createContext, useState } from 'react'
import {auth, provider} from './base'
import { signInWithPopup } from "firebase/auth";


const commentCrawdContext = createContext();

const CommentCrawdProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleUserAuth = async () => {
        try{
            const userData = await signInWithPopup(auth, provider);
            console.log(userData);
            setCurrentUser(userData.displayName);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <commentCrawdContext.Provider value={{handleUserAuth, currentUser}}>
            {children}
        </commentCrawdContext.Provider>
    )
};


export { commentCrawdContext, CommentCrawdProvider };