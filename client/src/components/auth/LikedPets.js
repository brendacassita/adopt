import Card from "../Card"
import { useEffect, useState } from "react"
import axios from "axios"

const LikedPets = ()=>{
    const [pets, setPets] =  useState([])

    useEffect(()=>{
        getLikedPets()
    }, [])

const getLikedPets = async ()=>{
    let res = await axios.get('/api/my_pets')
    console.log(res)
    setPets(res.data)
}


    return (
        <Card>
        <>
            <h1>Liked pets page</h1>
            {JSON.stringify}
            {pets.map((pet)=>{
                return(
                    <div key = {pet.id}>
                        <h2>{pet.name}</h2>
                        <p>{pet.id}</p>
                        </div>
                )
            })}
        </>
        </Card>
    )
} 
export default LikedPets



