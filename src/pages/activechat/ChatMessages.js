import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

function ChatMessages(props){
    return <div>
        <h2>Mensagens</h2>
        <ul>
            {props.chatmessages ? props.chatmessages.map( (message,i)=> <li key={i}>{message.text}</li> ) : null }
        </ul>
    </div>

}

export default ChatMessages;