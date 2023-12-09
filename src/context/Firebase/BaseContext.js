import { createContext, useState } from 'react'
import {auth, provider} from './base'
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";


const commentCrawdContext = createContext();

const CommentCrawdProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentWalletAddress, setCurrentWalletAddress] = useState(null);

    const handleUserAuth = async () => {
        try{
            const userDataResult = await signInWithPopup(auth, provider);
            const credential = TwitterAuthProvider.credentialFromResult(userDataResult);
            console.log(userDataResult.user.displayName);
            setCurrentUser(userDataResult.user.displayName);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <commentCrawdContext.Provider value={{handleUserAuth, currentUser, currentWalletAddress}}>
            {children}
        </commentCrawdContext.Provider>
    )
};


export { commentCrawdContext, CommentCrawdProvider };