import Card from "../Card"
import { useEffect, useState } from "react"
import axios from "axios"

const LikedPets = ()=>{
    const [pets, setPets] =  useState([])

    useEffect(()=>{
        getLikedPets()
        renderLikedPets()
    }, [])

const getLikedPets = async ()=>{
    try{
    let res = await axios.get('/api/my_pets')
    console.log(res)
    setPets(res.data)
    console.log(res.data);
} catch (error) {
  alert("error getting liked pets");
}
}

const renderLikedPets = ()=>{
    
}


    return (
        <Card>
        
            <h1>My Liked Pets Page</h1>
            {/* {JSON.stringify(pets)} */}
            {pets.map((pet)=>{
                return(
                    <div key = {pet.id}>
                        <h2>{pet.name}</h2>
                        <h3><img src = {pet.image}/></h3>
                        </div>
                )
            })}

        </Card>
    )
} 
export default LikedPets



