
import './App.css'

function App() {

  const times = [
    "Grêmio",
    "Inter",
    "Juventude",
    "São José"
  ]

  return (
    <>
      <div>
            <select>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}  
            </select>
        </div>

        <p>Lista</p>

        <div>

              <ul>

              {times.map((time2) => (
                <li key={time2}>{time2}</li>
              ))}
              
              </ul>

        </div>
        
    </>
  )
}

export default App
