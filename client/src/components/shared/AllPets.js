import axios from "axios";
import { useEffect, useState } from "react";
import Badge from "react-bootstrap/esm/Badge";
import Card from "../Card";

const AllPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getAllPets();
    renderPets();
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

  const renderPets = () => {
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
        <h1>All pets page</h1>

         {renderPets()}

        
      </div>
    </Card>
  );
};
export default AllPets;
