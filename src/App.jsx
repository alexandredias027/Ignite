import { Header } from "./components/Header"

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div>
      <Header />
      <h1>Teste</h1>

      <div className={styles.wrapper}>
        <aside>Esse é o conteúdo do App</aside>
        <main>
          <h1>Conteúdo Principal</h1>
        </main>
      </div>
    </div>
  )
}

export default App
