import s from './Company.module.css'
import {useEffect, useState} from "react";
import noLogo from '../../assets/noLogo.png'
import editButton from '../../assets/edit.svg'
import deleteButton from '../../assets/delete.svg'
import {Modal} from "../Modal/Modal";

export const Company = () => {
    const [companies, setCompanies] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/companies.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const fetchingData = data.map((data) => (
                    <div className={s.wrapper}>
                        <div className={s.imageWrapper}>
                            <img src={data.logo ? data.logo : noLogo} alt="logo"/>
                        </div>
                        <div className={s.titleWrapper}>
                            <div key={data.id}>{data.company_name}</div>
                            <div>{data.company_tin}</div>
                        </div>
                        <div className={s.buttonsWrapper}>
                            <img onClick={() => setIsOpen(true)} src={editButton} alt="editButton"/>
                            <img onClick={() => console.log('hello')} src={deleteButton} alt="deleteButton"/>
                        </div>
                    </div>
                ));
                setCompanies(fetchingData);
            });
    }, []);

    return (
        <>
            <div className={s.mainWrapper}>
                {companies}
            </div>
            {isOpen && <Modal open={isOpen} onClose={()=>setIsOpen(false)}>Hello im modal</Modal>}

        </>

    )
}