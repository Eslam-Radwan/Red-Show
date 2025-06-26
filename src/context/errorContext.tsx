import { createContext, useState, type ReactNode } from "react";


export interface ErrorContextType {
    errorMessage: string;
    setErrorMessage: (msg: string) => void;
    error: boolean;
    setError: (hidden: boolean) => void;
}
export const ErrorContext = createContext<ErrorContextType | undefined>(undefined);


export const ErrorProvider = ({children}: {children: ReactNode}) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(false)
    return (
        <ErrorContext.Provider value={{errorMessage, setErrorMessage, error, setError}}>
            {children}
        </ErrorContext.Provider>
    )
}


export default ErrorContext;