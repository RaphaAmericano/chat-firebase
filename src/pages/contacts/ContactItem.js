import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from 'react-redux-firebase';
import { setContactChat, setContactUID } from '../../features/selectedContact/selectedContactActions';

function ContactItem({ keyHash }){
    const firestore = useFirestore();
    const dispatch = useDispatch();

    const uid = useSelector(state => state.firebase.auth.uid);
    const user = useSelector(state => state.firebase.data.users[keyHash]);
    const chats = useSelector(state => state.firestore.data.chats);

    const genrateNewChat = () => {
        const isChat = Object.keys(chats).find(id => {
            const user1 = chats[id].users.find(elem => elem === uid);
            const user2 = chats[id].users.find(elem => elem === keyHash);
            if(user1 !== undefined && user2 !== undefined){
                return id
            }
        });
        if(isChat !== false || isChat !== undefined ){
            firestore.collection('chats').add({ users: [uid, keyHash] })
                .then(res =>  dispatch(setContactChat(res.id)))
                .catch(error => console.log(error))
        } else {
            dispatch(setContactChat(isChat))
        }
    }

    const selectContact = () => {
        dispatch(setContactUID(keyHash))
        genrateNewChat();
    }

    return <li><button type="button" onClick={selectContact}>{user.username}</button></li>
}

export default ContactItem;