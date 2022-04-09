import axios from "axios"
import { useContext, useState } from "react"
import { Badge, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"
import Card from "../Card"

const Feed = ()=>{
const [name, setName] = useState('')
const [species, setSpecies] = useState('')
const [description, setDescription] = useState('')
const [image, setImage] = useState('')
const [minimumPrice, setMinimumPrice] = useState('')
const auth = useContext(AuthContext); 
const navigate = useNavigate()


// const [pet_id, set_pet_id] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()

        let pet = {name: name, 
            species: species, 
            description: description,
            minimum_donation: minimumPrice,
            image: image,
            user_id: auth.user.id,
            pet_id: Math.random,
        }
        try{
        let res = await axios.post(`api/pets` , pet)
        console.log(res.data)
        navigate('/all_pets')
        }catch(error){
            alert('error listing pet')
        }

    }




    return (
        <div>
        <h2>Pet Form</h2>
 
 
 
 
         <Card>
         <form >
             <h2>
             <Badge>Pet Name</Badge>
             </h2>
             <br/>
             <br/>
 
             <input value={name} onChange={(e)=> setName (e.target.value)}/>
             <br/>
             <br/>
             <br/>

             <h2>
             <Badge> Species</Badge>
             </h2>
             <br/>
             <br/>
 
             <input value={species} onChange={(e)=> setSpecies (e.target.value)}/>
             <br/>
             <br/>
             <br/>

             <h2>
             <Badge>Image URL</Badge>
             </h2>
             <br/>
             <br/>
 
             <input value={image} onChange={(e)=> setImage (e.target.value)}/>
             <br/>
             <br/>
             <br/>

             <h2>
             <Badge>Description</Badge>
             </h2>
             <br/>
             <br/>
 
             <input value={description} onChange={(e)=> setDescription (e.target.value)}/>
             <br/>
             <br/>
             <br/>

             <h2>
             <Badge>Minimum Price</Badge>
             </h2>
             <br/>
             <br/>
 
             <input value={minimumPrice} onChange={(e)=> setMinimumPrice (e.target.value)}/>
             <br/>
             <br/>
             <br/>
 
 
 
 
             {/* <h2><Badge>Doctor ID:</Badge></h2>
 
             <br/>
             <br/>
             <input value={doctor_id} onChange={(e)=> set_doctor_id (e.target.value)}/> */}
             {/* <br/>
             <br/>
             <br/> */}

 
 
             <Button onClick={handleSubmit}>
             {/* <button> */}
                 List Pet
                 {/* </button> */}
                 </Button>
  
         </form>
         </Card>

         </div>
    )
} 
export default Feed