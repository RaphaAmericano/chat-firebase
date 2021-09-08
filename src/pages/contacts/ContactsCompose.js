import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import Contacts from "./Contacts";

export default compose(firebaseConnect(['profile']),
                connect(state => {
                    const toArray = state.firebase.profile.contacts ? Object.keys(state.firebase.profile.contacts).map( key => state.firebase.profile.contacts[key]) : [];
                    return {
                        contacts: toArray
                    };
                }))(Contacts)