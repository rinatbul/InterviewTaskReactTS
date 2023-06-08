import s from './Modal.module.css'

type PropsType={
    active: boolean
    setActive:()=>void
    onChanged:()=>void
}


export const Modal=(props:PropsType)=>{
    const setActiveHandler=()=>{
        props.onChange(false)
    }
    return (
        <div className={s.wrapper} onClick={()=>{alert('hello')}}>
            <div className={s.content}>

            </div>
        </div>
    )
}