import React,{useState, ReactNode} from 'react';

interface Props{
    children:ReactNode;
}

type Context = {
    userType:string;
    setUserType: (active: string) => void;
} 

export const AuthContext = React.createContext<Context>({ 
    userType:'',
    setUserType: () =>{}
});

const AuthContextProvider:React.FC<Props> = ({children}) =>{
    const [userType,setUserType] = useState('employer');

    return (
        <AuthContext.Provider value={{userType,setUserType}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;