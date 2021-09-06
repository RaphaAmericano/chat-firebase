import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

function Contacts(props){

    const contacts = useSelector(state => state.firebase.profile.contacts);

    return <div>
            <h2>Contatos</h2>
            <ul>
                {contacts !== undefined ? Object.keys(contacts).map( key => <ContactItem key={key} keyHash={contacts[key]}/>) : null }
            </ul>
        </div>
}
export default Contacts;