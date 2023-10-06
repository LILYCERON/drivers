import axios from "axios"
import { useSelector } from "react-redux";

export const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";
export const GET_DRIVERS_NAME = "GET_DRIVERS_NAME"
export const GET_DRIVER_BY_ID = "GET_DRIVER_BY_ID"
export const GET_ALL_TEAMS = "GET_ALL_TEAMS "
export const GET_TEAMS_BY_FILTER = "GET_TEAMS_BY_FILTER"
export const GET_AZ = "GET_AZ"

export function getAllDrivers(){
    return async function (dispatch) {
        const response = await axios.get("http://localhost:3001/drivers");
        return dispatch({
            type: GET_ALL_DRIVERS,
            payload: response.data
        })
    }
}


export function getDriverByid(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/drivers/${id}`);
        return dispatch({
            type: GET_DRIVER_BY_ID,
            payload: response.data
        })
    }
}

export function getAllTeams() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/teams`);
        return dispatch({
            type: GET_ALL_TEAMS,
            payload: response.data
        })
    }
}

export function getDriversName(search) {
    console.log(search)
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/drivers?name=${search}`);
        console.log(response.data)
        return dispatch({
            type: GET_DRIVERS_NAME,
            payload: response.data
        })
    }
}

export function getTeamsByfilter(teamFilter) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/drivers`);
        const teamsFilter = response.data.filter((obj) => obj.teams === teamFilter)
        return dispatch({
            type: GET_TEAMS_BY_FILTER,
            payload: teamsFilter,
        })
    }
}


export function filterAZ() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/drivers`);
        const driversAZ = response.data.sort((a, b) => {
            const driverA = a.name.forename.toLowerCase(); // Convertir a minúsculas para asegurar la comparación insensible a mayúsculas
            const driverB = b.name.forename.toLowerCase();

            if (driverA < driverB) {
                return -1; // a debe aparecer antes que b
            } else if (driverA > driverB) {
                return 1; // b debe aparecer antes que a
            } else {
                return 0; // a y b son iguales
            }
        });
        return dispatch({
            type: GET_AZ,
            payload: driversAZ,
        })
    }
}
