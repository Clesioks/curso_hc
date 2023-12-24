

const Citacao = ({texto, autor}) => {
  return (
    <div>
    <blockquote>
        <p>{texto}</p>
    <footer className="blockquote-footer">{autor}</footer>
    </blockquote>
    <button className="btn btn-primary m-1">Traduzir para o inglês</button>
    <button className="btn btn-secondary m-1">Traduzir para o espanhol</button>
    </div>
  )
}

export default Citacao