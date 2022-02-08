import React, {createContext, useContext, useReducer} from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const TodoLayerContext = createContext();

export const TodoLayer =({initialState, reducer, children}) => (
    <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </TodoLayerContext.Provider>
)

export const useTodoLayerValue = () => useContext(TodoLayerContext);