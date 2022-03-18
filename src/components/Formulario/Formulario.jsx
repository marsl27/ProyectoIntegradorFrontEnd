import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import FormContextProvider from "../../context/ContextoFormulario";
import { useQuery } from "react-query";

const getTypes = async () => {
	const response = await fetch("https://pokeapi.co/api/v2/type/")
	return await response.json()
}

// En este componente tenemos nuestro formulario y dentro de él
// tenemos los componentes que necesitan consumir nuestro estado.
// Recuerda cual es el paso que debemos tomar para que nuestros
// componentes puedan consumir un estado global.

const Formulario = () => {

	const { data, isLoading, error } = useQuery("getTypes", getTypes)
	console.log(data);
	console.log(isLoading);

	return (
		<>
			<header className="form-header">
				<div>
					<img src={pokebola} alt="pokebola" />
					<h2>Centro Pokemon de Ash</h2>
				</div>
				<Link className="volver" to="/">
					Home
				</Link>
			</header>
			<div className="formulario-ingreso">
				<h3>Solicitud de atención</h3>
				<p>
					Por favor, completa el formulario para que podamos atender a tu
					pokémon
				</p>
				<FormContextProvider>
					<div className="cuerpo-formulario">
						{/*
           Si tan solo tuviesemos una manera de "encapsular" nuestros componentes
           para que puedan acceder al estado global.
          */}

						<div className="inputs">
							<div>
								<p className="nombre-seccion">
									<img src={entrenador} alt="entrenador" />
									<span>ENTRENADOR</span>
								</p>
								<Input name="nombre" label="Nombre" tipo="entrenador" />
								<Input name="apellido" label="Apellido" tipo="entrenador" />
								<Input name="email" label="Email" type="email" tipo="entrenador" />
							</div>
							<div>
								<p className="nombre-seccion">
									<img src={pikachu} alt="pikachu" />
									<span>POKEMON</span>
								</p>
								<Input name="nombre" label="Nombre" tipo="pokemon" />
								<div className="input-contenedor">
									<label htmlFor="tipo">Tipo</label>
									{isLoading || error ? <select name="tipo" tipo="pokemon" disabled /> :
										<select name="tipo" tipo="pokemon">
											<option disabled selected>Selecciona una opción</option>
											{data?.results?.map((tipo) => {
												return <option value={tipo.name}>{tipo.name}</option>
											})}
										</select>}
								</div>
								<Input name="elemento" label="Elemento" tipo="pokemon" />
								<Input name="altura" label="Altura" tipo="pokemon" />
								<Input name="edad" label="Edad" tipo="pokemon" />
							</div>
						</div>
						<Detalle />
					</div>
				</FormContextProvider>
			</div>
		</>
	);
};

export default Formulario;
