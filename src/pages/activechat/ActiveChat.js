import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase, useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { setContactChat, setContactUID } from "../../features/selectedContact/selectedContactActions";

function ActiveChat(props){
    const dispatch = useDispatch();
    const uidContact = useSelector( state => state.selectedcontact.contactuid);
    const uidChat = useSelector( state => state.selectedcontact.activechatuid);
    
    const firestore = useFirestore();
    const firebase = useFirebase();

    useFirestoreConnect([ { collection: 'chats'}]);
    const chats = useSelector( state => state.firestore.data.chats);
    const chat = useSelector( state => state.firestore.data.chats[uidChat]);
    const uid = useSelector(state => state.firebase.auth.uid);
    const user = useSelector(state => state.firebase.data.users[uidContact]);
    React.useEffect(() => {
        findActiveChat()
    },[uidContact, chats])

    const createNewChat = () => {
        const newChat = { users: [uid, uidContact], messages:[] }
        firestore.collection('chats').add(newChat)
            .then( res => {
                firebase.push(`users/${uid}/chats`, res.id);
                firebase.push(`users/${uidContact}/chats`, res.id);
                return res.id;
            })
            .then( id => dispatch(setContactChat(id)))
            .catch( error => console.log(error))
    }

    const findActiveChat = () => {
        const result = Object.keys(chats).find( key => chats[key].users.find( userUID => userUID === uid));
        if(result !== undefined ){
            dispatch(setContactChat(result))
        } else {
            createNewChat();
        }
    }



    return  <div>
                <h2>Chat Ativo: {uidChat}</h2>

            </div>
}

export default ActiveChat;