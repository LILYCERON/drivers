import "./Navbar.style.css"
import { useDispatch } from "react-redux";
import { getDriversName, getAllDrivers } from "../../redux/actions";
import { useState } from "react";

function Navbar({ pagination }) {
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    const changeInputSearch = (evento) => {
        try { 
            const stringSearch = evento.target.value
            if (evento.target.value.length < 23) {
                const differentCharacters = stringSearch.match(/[^A-Za-z\s]/); //busca caracteres distintos a letras mayúsculas, minúsculas y espacios
                if (differentCharacters !== null) {
                    alert(`${differentCharacters} it is not permitted, enter only letters (a-z)`)
                    e.target.value = name
                }
                setName(stringSearch)
                pagination(1)
    
            } else {
                alert("your search must be less than 23 characters")
            }
        } catch (error) {
            alert (error)
        }
    }

    const handleSearch = (event) => {
        event.preventDefault()
            if (name === "") {
                alert("Input something please")
            } else {
                dispatch(getDriversName(name))
                setName('')
            }
    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginLeft:'2rem', marginRight:'2rem'}}>
            <form className="form" onSubmit={handleSearch}>
                <a href="/">Back</a>
                <a href="/create">Create driver</a>
                <input value={name} id="inputSearch" type="text" name="search" onChange={changeInputSearch}></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default Navbar;