import axios from "axios";
import { useEffect, useState } from "react";
import Badge from "react-bootstrap/esm/Badge";
import Card from "../Card";

const AdoptedPets = () => {
  const [pets, setAdoptedPets] = useState([]);

  useEffect(() => {
    getAdoptedPets();
    renderAdoptedPets();
  }, []);

  const getAdoptedPets = async () => {
    try {
      let res = await axios.get("/api/adopted_pets");
      setAdoptedPets(res.data);
      console.log(res.data);
    } catch (error) {
      alert("error getting adopted pets");
    }
  };

  const renderAdoptedPets = () => {
    return pets.map((p) => {
      return (
        <Card key={p.id} style={{textAlign: 'center', flex:'justify-content'}}> 
          <div>
              <br/>
            <Badge bg="dark">
              <h1>{p.name}</h1>
            </Badge>
            <br/>
            <br/>


            <Badge bg="info" >
              <h6 style={{marginBottom: '0px'}}>{p.species}</h6>
            </Badge>
            <br/>

            <img src={p.image} />
            <br/>

            <p>{p.description}</p>
            <br/>

          </div>
        </Card>
      );
    });
  };

  return (
    <Card>
      <div>
        <h1>Adopted Pets Page</h1>

         {renderAdoptedPets()}

        
      </div>
    </Card>
  );
};
export default AdoptedPets;