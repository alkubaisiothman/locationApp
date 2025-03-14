import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, LOCATION_REF, USERS_REF, db } from "./firebaseConfig";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";


export function useFireAuth(){
    const [user, setUser] = useState()
    const [locations, setLocations] = useState([])

    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            setUser(user)
            if(user){
                const subColRef = collection(db, USERS_REF, user.uid, LOCATION_REF)
                onSnapshot(subColRef, querySnapshot => {
                    setLocations(querySnapshot.docs.map(doc => {
                        return {id: doc.id, ...doc.data()}              
                    }))
                })
            }
        })
    }, [])

    return [user, locations]
}


export async function loginUser(email, password){
    
    try {
        const userCreds = await signInWithEmailAndPassword(auth, email, password)  
        setDoc(doc(db, USERS_REF, userCreds.user.uid), {
            email
        }) 
    } catch (error) {
        return error.message
    }
    return null
}

export function logoutUser(){
    signOut(auth)
        .catch(error => error.message)
}