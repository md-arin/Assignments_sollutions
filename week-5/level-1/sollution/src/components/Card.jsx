import './Card.css'

function Card({name,description,interest1,interest2,interest3}){
   
    return(
        <>
        <div className='card'>  
        <div className='card-body'>
        <h2>{name}</h2>
            <p>{description}</p>
            <h3>Interests</h3>
            <p>{interest1}</p>
            <p>{interest2}</p>
            <p>{interest3}</p>
            <button>LinkedIn</button>
            <button>Twitter</button>
        </div>
        </div>
        </>
    )
}

export default Card;