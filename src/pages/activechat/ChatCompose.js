import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";

export default compose(
    connect((state) => ( { activechatuid: state.selectedcontact.activechatuid }) ),
    firestoreConnect(({ activechatuid }) => {
        console.log(activechatuid)
        if(activechatuid === ''){
            return [ { collection: 'chats' } ]
        }
        return [ { collection: 'chats', 
                    doc: activechatuid, 
                    subcollections: [{ collection: 'messages'}], 
                    storeAs: 'activeChatMessages' } ]
    }),
    connect((state) => {
        return {
            messages: state.firestore.ordered.activeChatMessages || [] 
        };
    })
    )(ChatMessages)