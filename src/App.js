// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { FormularioPregunta } from './components/FormularioPregunta';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Swal from 'sweetalert2';



function App() {
  const [preguntas, setPreguntas] = useState([]);
  let idActualPregunta = 0
  const addQuestion = (nueva) => {
    nueva.id = idActualPregunta;
    idActualPregunta++
    setPreguntas([...preguntas, nueva])
  }
  return (
    <div className="App p-5">
      <FormularioPregunta aniadePregunta={addQuestion}/>
    </div>
  );
}

export default App;
