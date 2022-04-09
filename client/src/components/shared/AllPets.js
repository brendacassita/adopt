import axios from "axios"
import { useState } from "react"
import Card from "../Card"

const AllPets = ()=>{
const [pets, setPets] = useState([])


const  getAllPets = async()=>{
        try{
             let res = await axios.get('/api/pets')
        setPets(res.data)
        }catch(error){
            alert('error getting pets')
        }
       
    }

    return (
        <Card>
        <div>
            <h1>All pets page</h1>
            {JSON.stringify(getAllPets())}
        </div>
        </Card>
    )
} 
export default AllPets