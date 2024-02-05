import {useState} from 'react'

const Formulario2 = () => {

  const [values, setValues] = useState({
    nome: "",
    email: "",
    senha: ""
  })

  const [status, setStatus] = useState({
    type: "",
    mensagemCadastro: "",
    mensagemNome: "",
    mensagemEmail: "",
    mensagemSenha: "",
    mensagemCaracter: ""
  })

  const handleInput = (e) => {

    setValues({...values, [e.target.name]:e.target.value})

  }


  const handleSubmit = (e) => {

    e.preventDefault()
    console.log(values)
    if(!validade()) return;


    // local para fazer requisição ao backend
    const saveDataForm = true; 

    if(saveDataForm) {
      setStatus({
        type: 'success',
        mensagemCadastro: "Usuário cadastrado com sucesso"
      })
      setValues({
        name: "",
        email: "",
        senha: ""
      }) 
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: usuário não cadastrado com sucesso"
      })
    }
  }

  const validade = () => {
    if(!values.nome) return setStatus({type: 'error', mensagemNome: "Erro: Necessário preencher o nome!"})
    if(!values.email) return setStatus({type: 'error', mensagemEmail: "Erro: Necessário preencher o email!"})
    if(!values.senha) return setStatus({type: 'error', mensagemSenha: "Erro: Necessário preencher a senha!"})
    if(values.senha.length < 6) return setStatus({type: 'error', mensagemCaracter: "Erro: Necessário senha com no mínimo 6 caracteres"})


    return true
  }

  return (
    <>
        <div>Formulario2</div>

       

        <form>

          <div>
            Nome:
            <input type='text' name='nome' value={values.name} onChange={handleInput} required/>
           {status.type === "error" ? <p style={{color: 'red'}}>{status.mensagemNome}</p>: ""} 
          </div>
          <div>
            Email:
            <input type='email' name='email' value={values.email} onChange={handleInput} required />
           {status.type === "error" ? <p style={{color: 'red'}}>{status.mensagemEmail}</p>: ""} 
          </div>
          <div>
            Senha:
            <input type='password' name='senha' value={values.senha} onChange={handleInput} />
           {status.type === "error" ? <p style={{color: 'red'}}>{status.mensagemSenha}</p>: ""} 
           {status.type === "error" ? <p style={{color: 'red'}}>{status.mensagemCaracter}</p>: ""} 
          </div>
          <button type='submit' onClick={handleSubmit}>Enviar</button>
        </form>
        {status.type === 'success' ? <p style={{ color: "green"}}>{status.mensagemCadastro}</p>: ""}

    </>

  )
}

export default Formulario2

