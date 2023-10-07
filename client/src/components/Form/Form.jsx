import React, { useEffect } from "react";
import {useSelector } from "react-redux/es/hooks/useSelector";
import { getTeamsByfilter } from "../../redux/actions";
import { useDispatch } from "react-redux";


function Form(){
    const dispatch = useDispatch()

    useEffect(()=> {dispatch(getTeamsByfilter())}, [])
    const teams = useSelector((state)=>{state.teams})
    return(
        <div>
            <a href="/home">Regresar al Home</a>
            <h3>Ingresa los datos para tu personaje en este mundo</h3>
            <option>Nombre:
                {<input></input>}
            </option>
            <option>Apellido:
                {<input></input>}
            </option>
            <option>Nacionalidad:
                {<input></input>}
            </option>
            <option>Imágen:
                {<input></input>}
            </option>
            <option>Fecha de Nacimiento:
                {<input></input>}
            </option>
            <option>Descripción:
                {<input></input>}
            </option>
            <option>Escuderías:
            <select  value ="teams"id="teams">
                </select>
            </option>
            <button>Crear</button>
        </div>
    )
}

export default Form;