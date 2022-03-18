import React, { useContext, useState } from "react";
import { formContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text", tipo }) => {
	// Aqui deberíamos acceder al estado global para poder obtener los datos
	// del formulario y una manera de actualizar los mismos.

	const { addData } = useContext(formContext)

	// También, utilizaremos un estado local para manejar el estado del input.

	const [input, setInput] = useState("")

	const onChange = (e) => {
		// Aquí deberíamos actualizar el estado local del input.
		setInput(e.target.value)
	};

	const onBlur = (e) => {
		e.preventDefault();
		const type = e.target.title === "entrenador" ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON"
		addData(type, e.target.id, input)
		// Aqui deberíamos actualizar el estado global con los datos de
		// cada input.
		// TIP: Podemos utilizar el nombre de cada input para guardar
		// los datos en el estado global usando una notación de { clave: valor }
	};

	return (
		<div className="input-contenedor">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				value={input}
				id={name}
				onChange={onChange}
				onBlur={onBlur}
				title={tipo}
			/>
		</div>
	);
};

export default Input;
