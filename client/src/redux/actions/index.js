import axios from "axios"
import { useSelector } from "react-redux";

export const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";
export const GET_DRIVERS_NAME = "GET_DRIVERS_NAME"
export const GET_DRIVER_BY_ID = "GET_DRIVER_BY_ID"
export const GET_ALL_TEAMS = "GET_ALL_TEAMS "
export const GET_DRIVER_BY_TEAM = "GET_DRIVER_BY_TEAM"
export const GET_AZ = "GET_AZ"
export const GET_ZA = "GET_AZ"
export const GET_DRIVER_DATE = "GET_DRIVER_DATE"
export const CREATE_DRIVER = "CREATE_DRIVER"
export const GET_DRIVER_BY_SOURCE = "GET_DRIVER_BY_SOURCE"
export const FILTER_BY_SOURCE_API = "FILTER_BY_SOURCE_API"
export const FILTER_BY_SOURCE_DB = "FILTER_BY_SOURCE_DB"
export const FILTER_BY_DOB = "FILTER_BY_DOB"
export const FILTER_BY_ALPHABET = "FILTER_BY_ALPHABET"

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

export function getDriversName(name) {
    return async function (dispatch) {
        try {
            const response = await axios(`http://localhost:3001/drivers?name=${name}`)
            return dispatch({
                type: GET_DRIVERS_NAME,
                payload: response.data
            })

        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function createDriver(form) {
    return async function (dispatch) {
        try {
            const response = await axios.post(`http://localhost:3001/drivers`, form);
            alert("your driver has been created ")
            return dispatch({
                type: CREATE_DRIVER,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export function getDriverByTeam(teamFilter) {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/drivers`);
        const teamsFilter = response.data.filter((obj) => (obj.teams !== undefined) && (obj.teams.includes(teamFilter)))
        console.log(teamsFilter)
        return dispatch({
            type: GET_DRIVER_BY_TEAM,
            payload: teamsFilter,
        })
    }
}
export function getDriverFordate() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/drivers`);
        const dataFilter = response.data.map((obj) => obj.dob)
        return dispatch({
            type: GET_DRIVER_DATE,
            payload: dataFilter,
        })
    }
}

export function inOrderBySourceApi(value) {
    return {
        type: FILTER_BY_SOURCE_API,
        payload: value
    }
}

export function inOrderBySourceDb(value) {
    return {
        type: FILTER_BY_SOURCE_DB,
        payload: value
    }
}

export function inOrderByDOB(value) {
    return {
        type: FILTER_BY_DOB,
        payload: value
    }
}

export function inOrderByAlphabet(value) {
    return {
        type: FILTER_BY_ALPHABET,
        payload: value
    }
}

