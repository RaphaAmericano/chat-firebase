import { useFirebase } from "react-redux-firebase"

export default function Chat(props){
    const firebase = useFirebase();

    const logout = () => {
        firebase.logout()
            .then( res => console.log(res))
    }

    return  <section>
                <div>Chat</div>
                <button onClick={logout}>deslogar</button>
            </section>
}