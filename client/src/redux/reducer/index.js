
//Declaramos el estado global

import { GET_ALL_DRIVERS, GET_DRIVER_BY_ID, GET_ALL_TEAMS, GET_TEAMS_BY_FILTER, 
    GET_AZ, GET_DRIVERS_NAME, GET_ZA, GET_DRIVER_DATE, CREATE_DRIVER } from "../actions";

let inicialState = {
    allDrivers: [], //Llegarán todos los conductores
    copyDrivers: [],
    driverDetail: {},
    teams: [],
    date:[],
}

function rootReducer(state = inicialState, action) {
    switch (action.type) {
        case GET_ALL_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
            }
        case GET_DRIVER_BY_ID:
            return {
                ...state,
                driverDetail: action.payload,
            }
        case GET_DRIVERS_NAME:
            return {
                ...state,
                allDrivers: action.payload,
            }
        case GET_ALL_TEAMS:
            return {
                ...state,
                teams: action.payload,
            }
        case GET_TEAMS_BY_FILTER:
            return {
                ...state,
                allDrivers: action.payload,
            }
        case GET_AZ:
            return {
                ...state,
                allDrivers: action.payload,
            }
        case GET_ZA:
            return {
                ...state,
                allDrivers: action.payload,
            }
        case GET_DRIVER_DATE:
            return{
                ...state,
                allDrivers: action.payload
            }
        case CREATE_DRIVER:
            return {
                ...state
            }

        default:
            return state
    }

}


export default rootReducer;