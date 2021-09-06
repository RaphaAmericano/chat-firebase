import React from "react";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase"

const initialValues = {
    username: '',
    email:'',
    password:'',
    cpf:''
}

function Register(props){
    const firebase = useFirebase();
    
    const { register, handleSubmit } = useForm({
        defaultValues: initialValues
    })

    const onSubmit = (data) => {
        firebase.createUser({ email: data.email, password: data.password}, { username: data.username, email: data.email, cpf: data.cpf })
            .then( res => console.log(res))
            .catch( error => console.log(error))
    }

    return <section>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Nome" type="text" {...register('username', { required: true } )} />
            <input placeholder="Email" type="email" {...register('email', { required: true } )} />
            <input placeholder="Senha" type="password" {...register('password', { required: true } )} />
            <input placeholder="cpf" type="number" {...register('cpf', { required: true } )} />
            <button type="submit" >Cadastrar</button>
        </form>
    </section>
}

export default Register;