import { createContext, useContext } from 'react';

export const Todocontext = createContext({})

export const useTodo = ()=>{
    return useContext(Todocontext)
}

export const Todoprovider = Todocontext.Provider
