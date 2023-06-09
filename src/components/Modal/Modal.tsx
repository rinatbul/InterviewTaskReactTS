import s from './Modal.module.css'
import {createPortal} from "react-dom";

export const Modal = (props: any) => {
    if (!props.open) return null
    return (
        <div onClick={props.onClose}>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <button>Сохранить</button>
                </div>
            </div>
        </div>


    )
}