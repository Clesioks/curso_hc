
const Composicao = ({members}) => {

  return (
    <div>

  <ul>
            {members.map((membro) => (
            <li key={membro.job} value={membro}>{membro.name} tem {membro.idade} anos e trabalha como {membro.job}</li>
        ))}
 
  </ul>

    </div>
  )
}

export default Composicao