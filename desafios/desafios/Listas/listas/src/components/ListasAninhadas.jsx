
const ListasAninhadas = () => {

    const times = [
        ["Gremio",
        "Inter",
        "Juventude"],
        ["Campeão",
        "Vice Campeão",
        'Terceiro Lugar'    ]        
    ]

    

  return (
    <div>
        
        <ul> 
        Times
            {times.map((subList, index) => (
                <li key={index}>
                    
                    <ul> 
                        {subList.map((item, subIndex) => (
                            <li key={subIndex}>{item}</li>
                        ))}
                    </ul>
                </li>
            )) }
        </ul>
    </div>
  )
}

export default ListasAninhadas