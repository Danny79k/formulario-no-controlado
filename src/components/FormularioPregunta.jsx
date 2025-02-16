import { React, useState } from 'react'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { preguntasContext } from '../provider/QuestionProvider'

export const FormularioPregunta = () => {

  const {addQuestion} = useContext(preguntasContext)

  const [pregunta, setPregunta] = useState({

    enunciado: "Enunciado",
    respuesta1: "Respuesta1",
    respuesta2: "Respuesta2",
    respuesta3: "Respuesta3",
    respuesta4: "Respuesta4",
    respuesta_correctas: -1,
    favorita: false,
  })

  const handleChange = (e) => {
    let nuevoValor = (e.target.type === "checkbox") ? e.target.checked : e.target.value;
    if (e.target.type === "radio") nuevoValor = parseInt(e.target.id[e.target.id.length - 1])

    setPregunta({
      ...pregunta,
      [e.target.name]: nuevoValor
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addQuestion({
      ...pregunta
    })

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Pregunta añadida correctamente",
      showConfirmButton: false,
      timer: 1200
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea className='form-control mb-2' placeholder='Enunciado Pregunta' name='enunciado' value={pregunta.enunciado} onChange={handleChange} />
        <div className='form-check mb-2'>
          <input type="radio" name='respuesta-correcta' className='form-check-input' id='inputCheck1' onChange={handleChange} />
          <input type="text" placeholder='respuesta 1' className='form-control mb-2' name='respuesta1' htmlFor='inputCheck1' value={pregunta.respuesta1} onChange={handleChange} />
        </div>
        <div className='form-check mb-2'>
          <input type="radio" name='respuesta-correcta' className='form-check-input' id='inputCheck2' onChange={handleChange} />
          <input type="text" placeholder='respuesta 2' className='form-control mb-2' name='respuesta2' htmlFor='inputCheck2' value={pregunta.respuesta2} onChange={handleChange} />
        </div>
        <div className='form-check mb-2'>
          <input type="radio" name='respuesta-correcta' className='form-check-input' id='inputCheck3' onChange={handleChange} />
          <input type="text" placeholder='respuesta 3' className='form-control mb-2' name='respuesta3' htmlFor='inputCheck3' value={pregunta.respuesta3} onChange={handleChange} />
        </div>
        <div className='form-check mb-2'>
          <input type="radio" name='respuesta-correcta' className='form-check-input' id='inputCheck4' onChange={handleChange} />
          <input type="text" placeholder='respuesta 4' className='form-control mb-2' name='respuesta4' htmlFor='inputCheck4' value={pregunta.respuesta4} onChange={handleChange} />
        </div>
        <button type='submit' className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  )
}
