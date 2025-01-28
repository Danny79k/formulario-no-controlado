// import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';
import { FormularioPregunta } from './components/FormularioPregunta';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { PreguntasCreadas } from './components/PreguntasCreadas';


let idActualPregunta = 1
export const preguntasContext = createContext([])

function App() {
  const [preguntas, setPreguntas] = useState([]);
  const addQuestion = (nueva) => {
    nueva.id = idActualPregunta;
    idActualPregunta++
    setPreguntas([...preguntas, nueva])
  }
  return (
    <preguntasContext.Provider value={{preguntas, setPreguntas, addQuestion}}>
      <div className="App p-5">
        <FormularioPregunta/>
        <PreguntasCreadas/>
      </div>
    </preguntasContext.Provider>
  );
}

export default App;
