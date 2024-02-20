import {useState} from 'react'

const FormularioRegistro = () => {

const [user, setUser] = useState({
    nome: "",
    email: "",
    senha: ""
})

const handleInput = (e) => {

    setUser({...user, [e.target.name] : e.target.value})
    

}

const enviarForm = (e) => {
    e.preventDefault()
    console.log(user)
}




  return (
    <>
    <div>Formulario Registro</div>

    <form  onSubmit={enviarForm}> 
        <label>Nome:</label>
        <input type='text' name='nome' value={user.nome} onChange={handleInput} />
        <label>Email:</label>
        <input type='email' name='email' value={user.email} onChange={handleInput}/>
        <label>Senha:</label>
        <input type='password' name='senha' value={user.senha} onChange={handleInput}/>
    <button type='submit'>Enviar</button>


    </form>
    </>



  )
}

export default FormularioRegistro