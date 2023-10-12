import { useNavigate } from 'react-router-dom';
import './card.style.css';

const Card = ({ id, name, image, teams, date}) => {
    const navigate = useNavigate()
    return(
        <div key={id}  className="card">
            <div className='name'>{name}</div>
            <img  className= "image" src={`${image}`}  style={{ width: '120px', height: '140px' }}/>
            <ul  className='info'>
            <p className='p'>Equipos: {teams}</p>
            <p>Nació: {date}</p>
            </ul>      
            <button  className="btn-a"type='button' onClick={() => navigate(`/home/${id}`)}>Detalle</button>
        </div>
    )
}
export default Card;