import s from './Modal.module.css'

type ModalPropsType={
    open:boolean
    onClose:()=>void
    children: string
}

export const Modal = (props: ModalPropsType) => {
    if (!props.open) return null
    return (
        <div onClick={props.onClose}>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <h1 className={s.title}>Редактировать данные организации</h1>
                    <div className={s.shortNameButtons}>
                        <button>ТОО</button>
                        <button>ИП</button>
                        <button>Прочие</button>
                    </div>
                    <div className={s.binInput}>
                        <input type="text"/>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        </div>


    )
}