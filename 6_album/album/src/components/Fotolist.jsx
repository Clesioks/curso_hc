import Foto from "./Foto"

const Fotolist = ({fotos}) => {
  return (
    <div className="album"> 
    {fotos.map((foto) => (
        <Foto key={foto.id} dados={foto} />
    ))}
    </div>
  )
}

export default Fotolist