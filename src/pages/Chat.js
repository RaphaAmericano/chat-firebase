import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase"
import ActiveChat from "./activechat/ActiveChat";
import ActiveChatCompose from "./activechat/ActiveChatCompose";
import Contacts from "./contacts/Contacts";
import ContactsCompose from "./contacts/ContactsCompose";
import UsersCompose from "./users/UsersCompose";

export default function Chat(props){
    const firebase = useFirebase();
    const username = useSelector(state => state.firebase.profile.username)
    const logout = () => {
        firebase.logout()
            .then( res => console.log(res))
    }

    return  <section>
                <div>Chat {username}<button onClick={logout}>deslogar</button></div>
                <UsersCompose />
                <ContactsCompose />
                <ActiveChatCompose />
            </section>
}