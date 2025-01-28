import {React, useContext} from 'react'
import { Pregunta } from './Pregunta'
import { preguntasContext } from '../App'

export const PreguntasCreadas = () => {

    const {preguntas} = useContext(preguntasContext)

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