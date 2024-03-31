import axios from "axios";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const getContacts = async () => {
    let data = await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
    setData(data.data);
  }

  const [datas, setData] = useState([]);
  const [mDatos, setmDatos] = useState({
    telefono: "", nombre: "", imagen: ""
  });

  useEffect(() => {
    getContacts();
  }, []);

  const crearContacto = async () => {
    await axios.post("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project", {
      "names": mDatos.nombre,
      "telephone": mDatos.telefono,
      "image": mDatos.imagen,
    });
    getContacts();
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Agenda telefónica</h1>
        <div className="inputs-container">
          <input type="text" className="input" placeholder="Nombre" value={mDatos.nombre} onChange={(e) => { setmDatos({ ...mDatos, nombre: e.target.value }) }} />
               <input type="text" className="input" placeholder="Teléfono" value={mDatos.telefono} onChange={(e) => { setmDatos({ ...mDatos, telefono: e.target.value }) }} />
                     <input type="text" className="input" placeholder="Imagen" value={mDatos.imagen} onChange={(e) => { setmDatos({ ...mDatos, imagen: e.target.value }) }} />
          <button className="button" onClick={() => { crearContacto() }}>Nuevo contacto</button>
        </div>
      </div>

      <div className="contacts">
        {datas.map((persona) => {
          return (
            <div key={persona.identify} className="contact">
              <img src={persona.image} alt="Foto" />
              <div>
                <h3>{persona.names}</h3>
                <p>{persona.telephone}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;