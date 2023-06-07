import s from './App.module.css'
import {Company} from "./components/Company";


function App() {

  return (
      <div>
          <header>My organization</header>
          <div className={s.wrapper}>
              <Company/>
          </div>
      </div>

  )
}

export default App
