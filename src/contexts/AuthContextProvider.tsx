import { firestore } from '../firebaseConfig';
import React,{useState, ReactNode} from 'react';

interface Props{
    children:ReactNode;
}

type Context = {
    userType:firebase.firestore.DocumentData;
    setUserType: (active:firebase.firestore.DocumentData) => void;
} 

export const AuthContext = React.createContext<Context>({ 
    userType:{},
    setUserType: () =>{}
});

const AuthContextProvider:React.FC<Props> = ({children}) =>{
    const [userType,setUserType] = useState({});

    return (
        <AuthContext.Provider value={{userType,setUserType}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;