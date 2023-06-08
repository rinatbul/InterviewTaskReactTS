import s from './Modal.module.css'
import {createPortal} from "react-dom";

// type PropsType={
//     active: boolean
//     setActive:()=>void
//     onChanged:()=>void
// }


export const Modal=(props: any)=>{
    return (
        createPortal(props.children, document.body)
    )
}