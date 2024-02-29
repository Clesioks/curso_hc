
const RenderSwitch = ({trueFalse}) => {

let condicao;

    switch (trueFalse) {
        case true:
        condicao =  <div> True</div> 
            break;    
        default:
            condicao = <div>False</div> 
            break;
    }



  return condicao
}

export default RenderSwitch