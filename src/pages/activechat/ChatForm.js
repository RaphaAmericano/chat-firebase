import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";

const initialValues = {
    text: ''
}

function ChatForm(props){

    const firestore = useFirestore();
    const uid = useSelector( state => state.firebase.auth.uid);
    const activeChatUid = useSelector( state => state.selectedcontact.activechatuid);
    const { register, handleSubmit, reset } = useForm({
        defaultValues: initialValues
    });

    const onSubmit = (data) => {
        console.log(data);
        const newMessage = { chat: activeChatUid, text: data.text, owner: uid, time: new Date().getTime()}
        console.log(newMessage);
        firestore.collection('messages').add(newMessage)
            .then(res => {
                console.log(res)
                reset(initialValues)
            })
            .catch(error => console.warm(error))
    }
    
    return <form onClick={handleSubmit(onSubmit)}>
        <input {...register('text', { required: true })}/>
        <button type="submit">Enviar</button>
    </form>
}

export default ChatForm;