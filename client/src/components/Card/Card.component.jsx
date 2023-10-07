import './card.style.css';

const Card = ({ id, name, image, teams, date}) => {

    return(
        <div key={id}  className="card">
            <img src={`${image}`}  style={{ width: '100px', height: '120px' }}/>
            <p>Nombre: {name}</p>
            <p>Equipos: {teams}</p>
            <p>Nació: {date}</p>
            <a href= {`home/${id}`} props={id}>Detalle</a>
        </div>
    )
}
export default Card;