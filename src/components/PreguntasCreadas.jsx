import React from 'react'
import { Pregunta } from './Pregunta'

export const PreguntasCreadas = ({preguntas}) => {


    return (
       
        <div className='grid'>
            <div className="list-group">
            {
                preguntas.map( p => {
                    return (<div className='col-3'><Pregunta key={p.id} pregunta={p}/></div>)
                })
            }
            </div>
        </div>
    )
}