// almacenas información
import { use } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [ name, setName ] = useState("Sofía");
  const [ newName, setNewName ] = useState("");

  const changeName = () => {
    if (newName.trim() != "") {
      setName(newName);
      setNewName("") // dejar campo de input limpio
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // evitar que la página se recargue al enviar el formulario
    alert("Formulario enviado");
    changeName(); // cambiar nombre de formulario
  };

  const handleChange = (e) => setNewName(e.target.value);

  return (
    <div>
      <h3>Teacher name: {name}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          placeholder="Add a new name"
          onChange={handleChange}
          id="form"
        />
        <button>Cambiar</button>
      </form>

      <ul>
        <li onClick={() => setName("Data")}>Data</li>
        <li onClick={() => setName("Reyes")}>Reyes</li>
        <li onClick={() => setName("Soraya")}>Soraya</li>
      </ul>
      <button onClick={() => setName("Alex")}>Cambiar nombre</button>
    </div>
  );
}

export default App;
