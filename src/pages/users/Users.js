import React from "react";
import { useSelector } from "react-redux";
import { firestoreConnect, useFirebase, useFirebaseConnect, useFirestore, useFirestoreConnect } from "react-redux-firebase";


function Users({ users, contacts }){
    
    const firebase = useFirebase();
    const uid = useSelector(state => state.firebase.auth.uid);

    const addToContacts = (key) => {
        if(contacts === undefined){
            return firebase.push(`users/${uid}/contacts`, key)
        } else {
            const exists = contacts.find( contact => contact === key)
            console.log(exists);
            if(exists === undefined || exists === null ) {
                return firebase.push(`users/${uid}/contacts`, key)
            }
        }
    }

    return  <div>
                <h2>Usuarios</h2>
                <ul>
                    {users !== undefined ? users.filter(user => user.uid !== uid).map(user => <li key={user.uid} ><button type="button" onClick={() => addToContacts(user.uid)}>{user.username}</button></li>) : null }
                </ul>
            </div>
}

export default Users;