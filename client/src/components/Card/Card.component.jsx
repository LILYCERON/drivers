import { useNavigate } from 'react-router-dom';
import './card.style.css';

const Card = ({ id, name, image, teams, date }) => {
    const navigate = useNavigate()
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'space-evenly',
                height: "420px",
                padding: '1rem 0 1rem 0'
            }
        } key={id} className="card">
            <div  style={{ width: '90%', display: 'flex', paddingLeft: '0.5rem', flexDirection: 'column', borderLeft: 'solid 0.7rem yellow', }}>
                <div className='name' style={{  width: 'fit-content',  height: '2rem' }}>{name}
                </div>
                <p style={{ fontSize: '15px', margin: 0 }}>{date}</p>
            </div>
            <div className='' style={{ width: '100%', height: '100%' }}>
                <hr style={{ width: '95%', color: 'gray' }}></hr>
                <img src={`${image}`} style={{ width: '100%', height: '220px' }} />
            </div>
                    <hr style={{ width: '10%', color: 'red', marginTop: 0 }}></hr>
            <div className='' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', height: '5rem' }}>
                <div className='' style={{ display: 'flex',
                        alignItems: 'center', width: 'fit-content', height: '7rem' }}>
                    <div className='' style={{
                        
                        
                        flexWrap: 'wrap',
                        width: '100%',
                        paddingLeft: '0.257rem'
                    }}><strong>Teams:</strong>&nbsp;
                        {teams.map((team) => {
                            return <span>{team},&nbsp; </span>
                        })}
                    </div>
                </div>
            </div>
                <button style={{
                    width: 'fit-content',
                    padding: '0.2rem 0.5rem',
                    fontSize: '1rem',
                    borderBlockEndWidth: '0.1rem',
                    fontStyle: 'oblique',
                    borderColor: 'rgba(36, 36, 33, 0.815)',
                    borderRadius: '0.5rem',
                    fontWeight: 'bold'
                }} type='button' onClick={() => navigate(`/home/${id}`)}>Detail</button>
        </div>
    )
}
export default Card;