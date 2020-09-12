import React,{ReactNode, useState} from 'react';

interface Props{
    children:ReactNode;
}

type Context={
    isLoading:boolean,
    setIsLoading:(isLoading:boolean)=>void,
};

export const LoadingContext = React.createContext<Context>({ 
    isLoading:false,
    setIsLoading: () =>{}
});

const LoadingContextProvider:React.FC<Props> = ({children}) =>{
    const [isLoading,setIsLoading] = useState<boolean>(false);

    return (
        <LoadingContext.Provider value={{isLoading,setIsLoading}}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingContextProvider;