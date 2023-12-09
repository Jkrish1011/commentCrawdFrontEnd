import { createContext } from 'react'
import {auth, provider} from './base'
import { signInWithPopup } from "firebase/auth";


const commentCrawdContext = createContext();

const CommentCrawdProvider = ({children}) => {
    
    const handleUserAuth = async () => {
        try{
            const userData = await signInWithPopup(auth, provider);
            console.log(userData);
            
        }catch(err){
            console.error(err);
        }
    }

    return (
        <commentCrawdContext.Provider value={{handleUserAuth}}>
            {children}
        </commentCrawdContext.Provider>
    )
};


export { commentCrawdContext, CommentCrawdProvider };