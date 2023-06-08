import s from './App.module.css'
import {Company} from "./components/Company/Company";
import {Modal} from "./components/Modal/Modal";
import {useState} from "react";


function App() {
    const [active, setActive] = useState(true)
    const handleChange = (active)=>{
        setActive(value)
    }

    return (
        <div className={s}>
            <header>Мои организации</header>
            <Company/>
            <Modal active={active} setActive={setActive} onChange={handleChange}/>
        </div>

    )
}

export default App
