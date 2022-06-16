import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase, useFirestore } from 'react-redux-firebase';
import { setContactChat, setContactUID } from '../../features/selectedContact/selectedContactActions';

function ContactItem({ keyHash }){
    const firestore = useFirestore();
    const firebase = useFirebase();
    const dispatch = useDispatch();

    const uid = useSelector(state => state.firebase.auth.uid);
    const user = useSelector(state => state.firebase.data.users[keyHash]);
    const chats = useSelector(state => state.firestore.data.chats);

    const genrateNewChat = () => {
        let isChat;
        Object.keys(chats).forEach( key => {
            const activeTarget = chats[key].users.find(user => user === keyHash)
            const activeUser = chats[key].users.find(user => user === uid)
            if(activeTarget !== undefined && activeUser !== undefined){
                isChat = key;
            }
        });
        // if(isChat === undefined){
        //     firestore.collection('chats')
        //         .add({ users: [uid, keyHash] })
        //         .then( res => dispatch(setContactChat(res.id))
        //         .then( res => console.log(res))
        //         .catch(error => console.log(error))
        // } else {
        //     dispatch(setContactChat(isChat))
        // }
    }

    const selectContact = () => {
        dispatch(setContactUID(keyHash))
        genrateNewChat();
    }

    return <li><button type="button" onClick={selectContact}>{user.username}</button></li>
}

export default ContactItem;