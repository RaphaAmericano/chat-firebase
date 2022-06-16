import React from "react";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase"
import { registerLogin } from "../services/analytics";

const initialValues = {
    email:'',
    password:''
}

function Login(props){
    const firebase = useFirebase();
    
    const { register, handleSubmit } = useForm({
        defaultValues: initialValues
    })

    const onSubmit = (data) => {
        firebase.login({ email: data.email, password: data.password})
            .then( res => {
                console.log(res);
                registerLogin(data.email);
            })
            .catch( error => console.log(error))
    }

    return <section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Email" type="email" {...register('email', { required: true } )} />
            <input placeholder="Senha" type="password" {...register('password', { required: true } )} />
            <button type="submit" >Entrar</button>
        </form>
    </section>
}

export default Login;