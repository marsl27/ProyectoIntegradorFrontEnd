// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext } from "react";
import { useReducer } from "react/cjs/react.development";

export const formContext = createContext()

const initialState = {
	entrenador:{
		nombre:"",
		apellido:"",
		email:"",
	},
	pokemon:{
		nombre: "",
		tipo:"",
		elemento:"",
		altura:0,
		edad:0
	}
}

/**
 * @author Mariel Romeo
 * Funcion reductora para actualizar el estado
 * @param {Object} state objeto que contiene un objeto entrenador y uno pokemon con sus datos
 * @param {Object} action objeto que contiene el tipo que puede ser "ACTUALIZAR_ENTRENADOR" o "ACTUALIZAR_POKEMON". Ademas contiene un payload que
 * viene con la key que es la propiedad del objeto y el dato a incluir en esa propiedad. Ambos vienen del input.
 * @returns state
 */

function reducer(state=initialState, action){
	switch (action.type) {
		case "ACTUALIZAR_ENTRENADOR":
			return {
				...state,
				entrenador:{
					...state.entrenador,
					[action.payload.key]:action.payload.dato,
				}
			}
		case "ACTUALIZAR_POKEMON":
			return{
				...state,
				pokemon:{
					...state.pokemon,
					[action.payload.key]:action.payload.dato,
				}
			}
		default:
			return {...state}
			
	}
}	

/**
 * Funcion provider que utiliza el reducer y devuelve los datos del form y la funcion addData
 * @author Mariel Romeo
 * @param {*} children  
 * @returns 
 */

export default function FormContextProvider({ children }) {

	const [dataForm, dispatch] = useReducer( reducer,initialState)

	/**
	 * Función que ejecuta el dispatch para actualizar el estado.
	 * @author Mariel Romeo
	 * @param {*} type "ACTUALIZAR_ENTRENADOR" o "ACTUALIZAR_ENTRENADOR" para mandarlo a la funcion reducer
	 * @param {*} key propiedad del objeto a actualizar
	 * @param {*} dato información a incluir en la propiedad
	 */

	function addData(type, key, dato){
		dispatch({type, payload: {key, dato}})
	}

	return (
		<formContext.Provider value={{dataForm,addData}}>
			{children}
		</formContext.Provider>
	)
}
