import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ActiveChat from "./ActiveChat";

export default compose(
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
            messages: state.firestore.ordered.messages
        };
    })
    )(ActiveChat)