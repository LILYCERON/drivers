import axios from "axios"
import { useSelector } from "react-redux";

export const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";
export const GET_DRIVERS_NAME = "GET_DRIVERS_NAME"
export const GET_DRIVER_BY_ID = "GET_DRIVER_BY_ID"
export const GET_ALL_TEAMS = "GET_ALL_TEAMS "
export const GET_TEAMS_BY_FILTER = "GET_TEAMS_BY_FILTER"
export const GET_AZ = "GET_AZ"
export const GET_ZA = "GET_AZ"
export const GET_DRIVER_DATE = "GET_DRIVER_DATE"

export function getAllDrivers() {
    return async function (dispatch) {
        const response = await axios.get("http://localhost:3001/drivers");
        return dispatch({
            type: GET_ALL_DRIVERS,
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

export function getDriverByid(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/drivers/${id}`);
        return dispatch({
            type: GET_DRIVER_BY_ID,
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
        const teamsFilter = response.data.map((obj) => obj.teams === teamFilter)
        console.log(teamsFilter)
        return dispatch({
            type: GET_TEAMS_BY_FILTER,
            payload: teamsFilter,
        })
    }
}
export function getDriverFordate() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/drivers`);
        const dataFilter = response.data.map((obj) => obj.dob)
        console.log("date",dataFilter)
        return dispatch({
            type: GET_DRIVER_DATE,
            payload: dataFilter,
        })
    }
}

export function inOrder(value) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/drivers`);

        if (value === "az" || value === "za") {
            const driversAZ = response.data.sort((a, b) => {
                const driverA = a.name.forename.toLowerCase().normalize("NFD"); // Convertir a minúsculas para asegurar la comparación insensible a mayúsculas
                const driverB = b.name.forename.toLowerCase().normalize("NFD");
                if (driverA < driverB) {
                    return -1; // a debe aparecer antes que b
                } else if (driverA > driverB) {
                    return 1; // b debe aparecer antes que a
                } else {
                    return 0; // a y b son iguales
                }
            });
            if (value === "az") {
                return dispatch({
                    type: GET_AZ,
                    payload: driversAZ,
                })
            } else if (value === "za") {
                return dispatch({
                    type: GET_ZA,
                    payload: driversAZ.reverse(),
                })
            }
        } else if (value === "nacimiento") {
            const orderDate = response.data.sort((a, b) => {
                const driverA = a.dob.toLowerCase().normalize("NFD"); // Convertir a minúsculas para asegurar la comparación insensible a mayúsculas
                const driverB = b.dob.toLowerCase().normalize("NFD");
                if (driverA < driverB) {
                    return 1; // a debe aparecer antes que b
                } else if (driverA > driverB) {
                    return -1; // b debe aparecer antes que a
                } else {
                    return 0; // a y b son iguales
                }
            });
            console.log(orderDate)
            return dispatch({
                type: GET_DRIVER_DATE,
                payload: orderDate,
            })
        }
    }
}
