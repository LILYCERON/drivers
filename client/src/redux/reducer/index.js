
//Declaramos el estado global

import {
    GET_ALL_DRIVERS, GET_DRIVER_BY_ID, GET_ALL_TEAMS, GET_DRIVERS_NAME,
    GET_DRIVER_DATE, CREATE_DRIVER, GET_DRIVER_BY_TEAM, GET_DRIVER_BY_SOURCE, 
    FILTER_BY_ALPHABET, FILTER_BY_DOB, FILTER_BY_SOURCE_API, FILTER_BY_SOURCE_DB
} from "../actions";

let inicialState = {
    allDrivers: [], //Llegarán todos los conductores
    copyDrivers: [],
    driverDetail: {},
    teams: [],
    date: [],
}

function rootReducer(state = inicialState, action) {
    switch (action.type) {
        case GET_ALL_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                copyDrivers: action.payload
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
        case GET_DRIVER_BY_TEAM:
            return {
                ...state,
                allDrivers: action.payload,
                copyDrivers: action.payload,
            }
        case GET_DRIVER_BY_SOURCE:
            return {
                ...state,
                allDrivers: action.payload
            }
        case FILTER_BY_SOURCE_DB:
           
                const orderDate = state.copyDrivers.filter((driver) => driver.createdInDb === true)
                
                return {
                    ...state,
                    allDrivers: orderDate
                }
        case FILTER_BY_SOURCE_API:
            const orderDate1 = state.copyDrivers.filter((driver) => driver.createdInDb === false)
                
                return {
                    ...state,
                    allDrivers: orderDate1
                }
        case FILTER_BY_ALPHABET:

            const driversAZ = state.allDrivers.sort((a, b) => {
                const driverA = a.forename.toLowerCase(); // Convertir a minúsculas para asegurar la comparación insensible a mayúsculas
                const driverB = b.forename.toLowerCase();
                if (driverA < driverB) {
                    return -1; // a debe aparecer antes que b
                } else if (driverA > driverB) {
                    return 1; // b debe aparecer antes que a
                } else {
                    return 0; // a y b son iguales
                }
            });
            if (action.payload === "az") {
                return {
                    ...state,
                    allDrivers: driversAZ.slice(0, driversAZ.length)
                }
            } else {
                return {
                    ...state,
                    allDrivers: driversAZ.reverse().slice(0, driversAZ.length)
                }
            }
        case FILTER_BY_DOB:
            if (action.payload === "desc") {
                const orderDate = state.allDrivers.sort((a, b) => {
                    const driverA = a.birth_date.toLowerCase(); // Convertir a minúsculas para asegurar la comparación insensible a mayúsculas
                    const driverB = b.birth_date.toLowerCase();
                    if (driverA < driverB) {
                        return 1; // a debe aparecer antes que b
                    } else if (driverA > driverB) {
                        return -1; // b debe aparecer antes que a
                    } else {
                        return 0; // a y b son iguales
                    }
                });
                return {
                    ...state,
                    allDrivers: orderDate.slice(0, orderDate.length)
                }
            }
            if (action.payload === "asc") {
                const orderDate = state.allDrivers.sort((a, b) => {
                    const driverA = a.birth_date.toLowerCase(); // Convertir a minúsculas para asegurar la comparación insensible a mayúsculas
                    const driverB = b.birth_date.toLowerCase();
                    if (driverA > driverB) {
                        return 1; // a debe aparecer antes que b
                    } else if (driverA < driverB) {
                        return -1; // b debe aparecer antes que a
                    } else {
                        return 0; // a y b son iguales
                    }
                });
                return {
                    ...state,
                    allDrivers: orderDate.slice(0, orderDate.length)
                }
            }
        case GET_DRIVER_DATE:
            return {
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