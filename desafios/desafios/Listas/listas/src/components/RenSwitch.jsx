

const RenSwitch = ({numbers}) => {


let component

switch (numbers) {
    case "1":
        component = <div>O componente é 1</div>        
        break;
        case "2":
            component =  <div>O componente é 1</div>        
            break;
            case "3":
                component =       <div>O componente é 1</div>        
                break;

    default:
        component =   <div>Nenhum componente é válido</div>
        break;
}







  return component
  
}

export default RenSwitch