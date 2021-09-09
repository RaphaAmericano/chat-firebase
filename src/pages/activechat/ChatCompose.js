import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";

export default compose(
    // firestoreConnect(
    // ({ activechat }) => [{ collection: 'messages', where: [['chat', '==', activechat]] }]), 
    // connect((state, props) => ({
    //     chatmessages: state.firestore.ordered.messages
    // }))
    connect((state) => ( { activechatuid: state.selectedcontact.activechatuid }) ),
    firestoreConnect(({ activechatuid }) => {
        if(activechatuid === ''){
            return [ { collection: 'chats' } ]
        }
        return [ { collection: 'chats', 
                    doc: activechatuid, 
                    subcollections: [{ collection: 'messages'}], 
                    storeAs: 'messages' } ]
    }),
    connect((state) => {
        
        return {
            messages: state.firestore.ordered.messages || [] 
        };
    })
    )(ChatMessages)