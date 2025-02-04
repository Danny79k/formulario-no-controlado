export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_QUESTION":
            return { preguntas: [...state.preguntas, action.payload] }
        case "DELETE_QUESTION":
            return { preguntas: state.preguntas.filter(p => p.id !== action.payload) }
        default:
            return state
    }
}
