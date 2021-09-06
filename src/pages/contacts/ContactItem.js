import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContactUID } from '../../features/selectedContact/selectedContactActions';

function ContactItem({ keyHash }){
    const dispatch = useDispatch();
    const user = useSelector(state => state.firebase.data.users[keyHash]);
    const selectContact = () => {
        dispatch(setContactUID(keyHash))
    }

    return <li><button type="button" onClick={selectContact}>{user.username}</button></li>
}

export default ContactItem;