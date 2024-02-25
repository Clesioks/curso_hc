import { useState, useEffect } from "react"

import styles from './DarkLight.module.css'

const DarkLight = () => {

    const [theme, setTheme] = useState('light')

    useEffect(() => {

        document.body.className = theme === "light" ? styles.lightTheme : styles.darkTheme

    }, [theme])

  return (
    <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : "light")}>Alterar tema</button>
    </div>
  )
}

export default DarkLight