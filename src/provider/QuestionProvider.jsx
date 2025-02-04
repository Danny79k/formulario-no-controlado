import React from 'react'
import { createContext, useReducer } from 'react'
import { reducer } from './QuestionReducer'

let idActualPregunta = 1

export const preguntasContext = createContext([])

export const QuestionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { preguntas: [] , idActual: 0})
    const addQuestion = (nueva) => {
        nueva.id = idActualPregunta;
        idActualPregunta++
        dispatch({ type: "ADD_QUESTION", payload: nueva })
    }
    return (
        <div>
            <preguntasContext.Provider value={{ state, dispatch, addQuestion }}>
                {children}
            </preguntasContext.Provider>
        </div>
    )
}
