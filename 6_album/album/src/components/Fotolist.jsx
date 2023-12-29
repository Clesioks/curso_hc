import Foto from "./Foto"

const Fotolist = ({fotos, setFotoAmpliada}) => {
  return (
    <div className="album"> 
    {fotos.map((foto) => (
        <Foto key={foto.id} dados={foto} setFotoAmpliada={setFotoAmpliada} />
    ))}
    </div>
  )
}

export default Fotolist