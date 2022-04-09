import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Badge from "react-bootstrap/esm/Badge";
import Button from "react-bootstrap/esm/Button";
import { AuthContext } from "../../providers/AuthProvider";
import Card from "../Card";

const AllPets = () => {
  const [pets, setPets] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    getAllPets();
  }, []);

  const getAllPets = async () => {
    try {
      let res = await axios.get("/api/pets");
      setPets(res.data);
      console.log(res.data);
    } catch (error) {
      alert("error getting pets");
    }
  };

  const removePetFromUI = (id) => {
      setPets(pets.filter((p) => p.id !== id));
    };
    

    const like = async (petId) => {

        let res = await axios.post(`/api/liked_pets`, {pet_id: petId, user_id: auth.user.id});

        removePetFromUI(petId);
    };
    
    // const renderPets = () => {
    //   return pets.map((p) => {
    //     return (
    //       <Card key={p.id} style={{textAlign: 'center', flex:'justify-content'}}> 
    //         <div>
    //             <br/>
    //           <Badge bg="dark">
    //             <h1>{p.name}</h1>
    //           </Badge>
    //           <br/>
    //           <br/>
  
  
    //           <Badge bg="info" >
    //             <h6 style={{marginBottom: '0px'}}>{p.species}</h6>
    //           </Badge>
    //           <br/>
  
    //           <img src={p.image} />
    //           <br/>
  
    //           <p>{p.description}</p>
    //           <br/>
  
    //         <Button onClick={() => like(pet.id)}>Like</Button>
              
    //         </div>
    //       </Card>
    //     );
    //   });
    // };
    const sample = () => {
        if (pets.length) {
            const index = Math.floor(Math.random() * pets.length);
            return pets[index];
        }
        return null;
  };
  const pet = sample()
  if(!auth.user){
      return(
          <>
          <p>You need to login to like pets</p>
          </>
      )
  }
  if (pet) {
  
       return (
           <>
             <Card key={pet.id} style={{textAlign: 'center', flex:'justify-content'}}> 
            <div>
                <br/>
              <Badge bg="dark">
                <h1>{pet.name}</h1>
              </Badge>
              <br/>
              <br/>
  
  
              <Badge bg="info" >
                <h6 style={{marginBottom: '0px'}}>{pet.species}</h6>
              </Badge>
              <br/>
  
              <img src={pet.image} />
              <br/>
  
              <p>{pet.description}</p>
              <br/>
  
            <Button onClick={() => like(pet.id)}>Like</Button>
              
            </div>
          </Card>
           </>
       )

} else {
       
     return(
            <div>
            <p>'No more pets'</p>
            </div>
        )
    }


}

export default AllPets;
