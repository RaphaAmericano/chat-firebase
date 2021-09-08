import React from "react";
import ContactItem from "./ContactItem";

function Contacts({ contacts }){

    return <div>
            <h2>Contatos</h2>
            <ul>
                {contacts ? contacts.map( (contact, i) => <ContactItem key={i} keyHash={contact}/>) : null }
            </ul>
        </div>
}
export default Contacts;