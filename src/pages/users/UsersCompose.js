import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Users from "./Users";

export default compose(firebaseConnect(['users']), 
    connect((state) => {
        const contactsToArray = state.firebase.profile.contacts ? Object.keys(state.firebase.profile.contacts).map(key => state.firebase.profile.contacts[key] ) : [];
        const toArray = state.firebase.data.users ? Object.keys(state.firebase.data.users).map(key => ({...state.firebase.data.users[key], uid: key}) ) : []
        return { users: toArray, contacts: contactsToArray }
    })
    )(Users)