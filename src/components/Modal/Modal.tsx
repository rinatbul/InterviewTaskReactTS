import s from './Modal.module.css'
import {StateType} from "../Company/Company";

type ModalPropsType={
    open:boolean
    onClose:()=>void
    children: string
    state: StateType
}

export const Modal = (props: ModalPropsType) => {
    if (!props.open) return null
    return (
        <div onClick={props.onClose}>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <h1 className={s.title}>Редактировать данные организации</h1>
                    <div className={s.shortNameButtons}>
                        <button onClick={()=>{console.log(props.state.ownerships.filter((owner)=>{}))}}>ТОО</button>
                        <button>ИП</button>
                        <button>Прочие</button>
                    </div>
                    <div className={s.inputBox}>
                        <Input/>
                        <Input/>
                    </div>
                    <div>
                        <button className={s.saveButton}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export const Input=()=>{
    return (
        <div className={s.input}>
            <form action="">
                <label htmlFor="fio">ИИН/БИН</label><br/>
                <input type="text" name="fio"/>
            </form>
        </div>
    )
}