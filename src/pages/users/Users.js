import React from "react";
import { useSelector } from "react-redux";
import { firestoreConnect, useFirebase, useFirebaseConnect, useFirestore, useFirestoreConnect } from "react-redux-firebase";


function Users(pros){
    const firebase = useFirebase();
    useFirebaseConnect([{ path: 'users' }]);
    const users = useSelector(state => state.firebase.data.users);
    const contacts = useSelector(state => state.firebase.profile.contacts);
    const uid = useSelector(state => state.firebase.auth.uid);

    const addToContacts = (key) => {
        if(contacts === undefined){
            return firebase.push(`users/${uid}/contacts`, key)
        } else {
            const exists = Object.keys(contacts).find( contact => contacts[contact] === key)
            console.log(exists);
            if(exists === undefined || exists === null ) {
                return firebase.push(`users/${uid}/contacts`, key)
            }
        }
    }

    return  <div>
                <h2>Usuarios</h2>
                <ul>
                    {users !== undefined ? Object.keys(users).filter(key => key !== uid).map(key => <li key={key} ><button type="button" onClick={() => addToContacts(key)}>{users[key].username}</button></li>) : null }
                </ul>
            </div>
}

export default Users;