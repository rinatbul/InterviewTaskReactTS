import s from './Modal.module.css'

type ModalPropsType={
    open:boolean
    onClose:()=>void
}

export const Modal = (props: ModalPropsType) => {
    if (!props.open) return null
    return (
        <div onClick={props.onClose}>
            <div className={s.wrapper}>
                <div className={s.content}>
                    {
                        state.ownerships.map()
                    }
                    <button>Сохранить</button>
                </div>
            </div>
        </div>


    )
}