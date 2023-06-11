import s from './Company.module.css'
import {useEffect, useReducer, useState} from "react";
import noLogo from '../../assets/noLogo.png'
import editButton from '../../assets/edit.svg'
import deleteButton from '../../assets/delete.svg'
import {Modal} from "../Modal/Modal";

type CompanyType = {
    company_id: number
    company_name: string
    company_tin: string
    ownership: OwnershipType | null
    logo: string | null

}

type OwnershipType = {
    id: string
    short_name:string
}

type StateType= {
    companies: CompanyType[]
}


type ActionType = { type: 'SET_COMPANIES',payload: CompanyType[] }


const initialState:any = {
    companies: [],
};

const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type){
        case 'SET_COMPANIES':
            return {...state, companies:action.payload};
        default:
            return state
    }

}

export const Company = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/companies.json')
            .then(response => response.json())
            .then((data:CompanyType[]) => dispatch({type:'SET_COMPANIES', payload: data }));
    }, []);

    return (
        <>
            <h1>Мои организации</h1>
            <div className={s.mainWrapper}>
                {
                    state.companies.map((company)=>{
                        console.log(company)
                        return <div className={s.wrapper}>
                            <div className={s.imageWrapper}>
                                <img src={company.logo ? company.logo : noLogo} alt="logo"/>
                            </div>
                            <div className={s.titleWrapper}>
                                <div key={company.company_id}>{company.company_name}</div>
                                <div>{company.company_tin}</div>
                            </div>
                            <div className={s.buttonsWrapper}>
                                <img src={editButton} alt="editButton"/>
                                <img src={deleteButton} alt="deleteButton"/>
                            </div>
                        </div>
                    })
                }
            </div>


            {/*{isOpen && <Modal open={isOpen} onClose={()=>setIsOpen(false)}>Hello im modal</Modal>}*/}

        </>

    )
}