// import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';
import { FormularioPregunta } from './components/FormularioPregunta';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { PreguntasCreadas } from './components/PreguntasCreadas';
import { useReducer } from 'react';
import { QuestionProvider } from './provider/QuestionProvider';




function App() {
  //const [preguntas, setPreguntas] = useState([]);
  //const addQuestion = (nueva) => {
    //nueva.id = idActualPregunta;
    //idActualPregunta++
    //setPreguntas([...preguntas, nueva])
  //}
  return (
    <QuestionProvider>
      <FormularioPregunta/>
      <PreguntasCreadas/>
    </QuestionProvider>
  );
}

export default App;
