import { useNavigate } from 'react-router-dom';
import './card.style.css';

const Card = ({ id, name, image, teams, date }) => {
    const navigate = useNavigate()
    return (
        <div key={id} className="card">
            <div className='name'>{name}</div>
            <img className="image" src={`${image}`} style={{ width: '120px', height: '140px' }} />
            <div style={{ width: '14rem', height: '7.5rem', margin: '1rem' }}>
                <hr style={{ width: '10%', color: 'red' }}></hr>
                <hr style={{ width: '30%' }}></hr>
                <div style={{
                    flexWrap: 'wrap'
                }}><strong>Teams:</strong>&nbsp;
                
                    {teams.map((team) =>{
                        
                        return <span>{team},&nbsp; </span>})}
                    
                </div>
                <p><strong>Born:</strong> {date}</p>
            </div>
            <button style={{
                width: 'fit-content',
                padding: '0.2rem 0.5rem',
                fontSize: '1rem',
                borderBlockEndWidth: '0.1rem',
                margin: '0.5rem',
                fontStyle: 'oblique',
                borderColor: 'rgba(36, 36, 33, 0.815)',
                borderRadius: '0.5rem',
                fontWeight: 'bold'
            }} type='button' onClick={() => navigate(`/home/${id}`)}>Detail</button>
        </div>
    )
}
export default Card;