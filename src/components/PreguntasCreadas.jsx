import {React, useContext} from 'react'
import { Pregunta } from './Pregunta'
import { preguntasContext } from '../provider/QuestionProvider'

export const PreguntasCreadas = () => {

    const {state} = useContext(preguntasContext)

    return (
       
        <div className='grid'>
            <div className="list-group">
            {
                state.preguntas.map( p => {
                    return (<div className='col-3'><Pregunta key={p.id} pregunta={p}/></div>)
                })
            }
            </div>
        </div>
    )
}