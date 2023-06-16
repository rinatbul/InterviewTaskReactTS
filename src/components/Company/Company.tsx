import s from './Company.module.css'
import {useEffect, useReducer} from "react";
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
    short_name: string
}

export type StateType = {
    companies: CompanyType[]
    ownerships: OwnershipType[]
    editingCompanyId: string;
    modalIsOpen: boolean
}


type ActionType =
    | { type: 'SET_COMPANIES', payload: CompanyType[] }
    | { type: 'SET_OWNERSHIPS', payload: OwnershipType[] }
    | { type: 'TOGGLE_MODAL', payload: boolean }
    | { type: 'SET_EDITING_COMPANY_ID', payload: string }


const initialState: any = {
    companies: [],
    ownerships: [],
    editingCompanyId: '',
    modalIsOpen: false,
};

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_COMPANIES':
            return {...state, companies: action.payload};
        case 'SET_OWNERSHIPS':
            return {...state, ownerships: action.payload}
        case '':
            return {...state, }
        case 'TOGGLE_MODAL':
            return {...state, modalIsOpen: action.payload}
        default:
            return state
    }

}

export const Company = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/companies.json')
            .then(response => response.json())
            .then((data: CompanyType[]) => dispatch({type: 'SET_COMPANIES', payload: data}));
        fetch('https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/ownerships.json')
            .then(response => response.json())
            .then((data: OwnershipType[]) => dispatch({type: 'SET_OWNERSHIPS', payload: data}));
    }, []);

    const editCompanyHandler = (companyId: string) => {
        const company = state.companies.find(c => c.company_id == companyId);
        company ? dispatch({type: 'SET_EDITING_COMPANY_ID', payload: companyId}):null
    }

    return (
        <>
            <h1>Мои организации</h1>
            <div className={s.mainWrapper}>
                {
                    state.companies.map((company) => {
                        return <div className={s.wrapper}>
                            <div className={s.imageWrapper}>
                                <img src={company.logo ? company.logo : noLogo} alt="logo"/>
                            </div>
                            <div className={s.titleWrapper}>
                                <div>{company.company_name}</div>
                                <div>{company.company_tin}</div>
                            </div>
                            <div className={s.buttonsWrapper}>
                                <img onClick={() => dispatch({type: 'TOGGLE_MODAL', payload: true})}
                                     src={editButton}
                                     alt="editButton"/>
                                <img onClick={() => {
                                    console.log(company.company_id)
                                }}
                                     src={deleteButton}
                                     alt="deleteButton"/>
                            </div>
                        </div>
                    })
                }
            </div>


            {state.modalIsOpen &&
                <Modal state={state}
                       open={state.modalIsOpen}
                       onClose={() => dispatch({type: 'TOGGLE_MODAL', payload: true})}
                />
            }

        </>

    )
}