import { put, select, all, call } from "redux-saga/effects"
import { setContactChat } from "./selectedContactActions";
import firebase from 'firebase/app';
import 'firebase/firestore';

export function* setChatUID(action){
    let user =  yield select((state) => state.firebase.auth.uid);
    let chats = yield select((state) => state.firestore.data.chats);
    
    let isChat;

    isChat = Object.keys(chats).find(id => {
        const user1 = chats[id].users.find(elem => elem === user);
        const user2 = chats[id].users.find(elem => elem === action.payload);
        if(user1 !== undefined && user2 !== undefined){
            return id
        }
    });

    if(isChat !== false || isChat !== undefined ){
        yield put({ type: 'SET_CONTACT_CHAT_UID', isChat})
    } 
}