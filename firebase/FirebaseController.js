
import { addDoc, collection, getDocs, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { auth, db, LOCATION_REF, USERS_REF } from "./firebaseConfig"

export function useFireLocations(){
    const [locations, setLocations] = useState([])

    useEffect(()=>{

       const q = query(collection(db, LOCATION_REF))

       onSnapshot(q, querySnapshot => {
        setLocations(querySnapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}  
       }))
    })
    }, [])

    return locations  
}

export function addLocation(location, description, rating){
    const subColRef = collection(db, USERS_REF, auth.currentUser.uid, LOCATION_REF)
    addDoc(subColRef, {location, description, rating})
        .catch(error => console.log(error.message))
}

export function getLocations(location, description, rating){
    const subColRef = collection(db, USERS_REF, auth.currentUser.uid, LOCATION_REF)
    getDocs(subColRef, {location, description, rating})
        .catch(error => console.log(error.message))
}