import s from './App.module.css'
import {Company} from "./components/Company/Company";
import {Modal} from "./components/Modal/Modal";

//portal for modal

//useReducer

//api.ts
function App() {

    return (
        <div className={s}>
            <header>Мои организации</header>
            <Company/>
        </div>

    )
}

export default App
