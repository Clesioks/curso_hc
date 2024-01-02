import { Component } from "react";

class ComponenteClasse extends Component {

    render () {
        const { name, age, job} = this.props

        return (

            <>
            
            <h3>Nome: {name}</h3>
            <p>Idade: {age}</p>            
            <p>Profissão: {job}</p>
            </>

        )
    }

}

export default ComponenteClasse
