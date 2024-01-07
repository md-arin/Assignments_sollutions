import { useState } from "react";
import Card from "./Card"
import './Createcard.css'

function CreateCard(){
    const [details, setDetails] = useState({
        name: "Enter your name",
        description: " Enter a short description",
        interest1: "interest1",
        interest2: "interest2",
        interest3: "interest3"
    })

    function handleChange(e){
        const {name, value} = e.target;

        setDetails((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
        })
    }

    return(
      <>
     <div className="create-card">
        <div>
            <h2>Create Your Own Card</h2>
            <div style={{
                display:"flex",
                flexDirection:"column",
                padding:"10px"
            }}>
                <div>
                <label htmlFor="">NAME: </label>
                <input type="text" placeholder="Enter Your name" 
                name="name" onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="">Description: </label>
                <input type="text" placeholder="Enter a short Descripton"
                name="description" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Interest 1: </label>
                    <input type="text" placeholder="Write interest"
                    name="interest1" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Interest 2: </label>
                    <input type="text" placeholder="Write interest" 
                    name="interest2" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Interest 3: </label>
                    <input type="text" placeholder="Write interest"
                    name="interest3" onChange={handleChange}/>
                </div>
                
            </div>
        </div>
        <Card name={details.name} description={details.description} 
        interest1={details.interest1} interest2={details.interest2}
        interest3={details.interest3}/>
         
     </div>
      </>
    )
  }

  export default CreateCard;