import Card from "../Card"
import { useState, useEffect } from "react"
import axios from "axios"
import { Form, Table } from "react-bootstrap";
import Badge from "react-bootstrap/esm/Badge"


const FindPets = ()=>{
    

    const [pets, setPets] = useState([])
    const [filteredSpecies, setFilteredSpecies] = useState([])

    useEffect(()=>{
        getPets()
    },[])


    const getPets = async ()=>{
        try{
            let res = await axios.get('/api/pets')
            setPets(res.data)
        }catch(err){
            alert('err in getting pets')
        }
    }

    const getSpecies = ()=>{
        return pets.reduce((accum, p)=>{
            if(!accum.includes(p.species)){
                accum.push(p.species)
            }
            return accum
        },[])
    }

    const handleSelect = (event) => {
        let selectedSpecies= event.target.value;
        setFilteredSpecies(pets.filter((p) => p.species == selectedSpecies));
      };

    const renderSelect = (species) => {
        return (
          <Form.Select label='Select'  onChange={handleSelect} aria-label="Select Species" >
            <option value="" disabled hidden> Please Choose A Species... </option>
            {species.map((species) => (

              <option   value={species} key={species}>{species}</option>
              
            ))
            }

          </Form.Select>
        )
      }

      const getSelect = () => {
        
        let uniqueSpecies= getSpecies();
        
        return renderSelect(uniqueSpecies);
       
      };

      const renderFilteredSpeciesPets = () => {
        if (!filteredSpecies) {
          return <p> No pets, or select a species</p>;
        }
    
        return (

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Description</th>
                <th>Minimum Donation</th>
                <th>Adopted</th>
                <th>Image</th>
              
              </tr>
            </thead>
            <tbody>
              {filteredSpecies.map((p) => (
                <tr key={p.id}>
                  <td>{p.description}</td>
                  <td>${p.minimum_donation}</td>
                  <td>{p.adopted}</td>
                  <td><img src = {p.image}/></td>

                </tr>
              ))}
            </tbody>
          </Table>
        );
      };
    
      return (
          <Card key={filteredSpecies.id}>
        <div>
  <Badge bg='dark' style={{margin:'10px'}}><h1>Species</h1></Badge>     


          {getSelect()}
          {renderFilteredSpeciesPets()}
          {/* {JSON.stringify(pets)} */}
        </div>
        </Card>
      );
    };

   


//     return (
//         <Card>
//         <div>
//             <h1>Find pets page</h1>
//             <p>Filter By species</p>
//             {JSON.stringify(pets)}
//         </div>
//         </Card>
//     )
// } 
export default FindPets