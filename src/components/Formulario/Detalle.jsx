import React, { useContext } from "react";
import { formContext } from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

  const {dataForm} = useContext(formContext)

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {dataForm.entrenador.nombre}</p>
          <p>Apellido: {dataForm.entrenador.apellido}</p>
          <p>Email: {dataForm.entrenador.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {dataForm.pokemon.nombre}</p>
		  <p>Tipo: {dataForm.pokemon.tipo}</p>
		  <p>Elemento: {dataForm.pokemon.elemento}</p>
		  <p>Altura: {dataForm.pokemon.altura}</p>
		  <p>Edad: {dataForm.pokemon.edad}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
