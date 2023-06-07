import s from './Company.module.css'
import {useEffect, useState} from "react";


export const Company = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/companies.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const fetchingData = data.map((data, index) => (
                    <div className={s.wrapper}>
                        <div className={s.imageWrapper}>
                            <img src={data.logo} alt="logo"/>
                        </div>
                        <div className={s.titleWrapper}>
                            <div key={data.id}>{data.company_name}</div>
                            <div>{data.company_tin}</div>
                        </div>
                        <div className={s.buttonsWrapper}>
                            <button>edit</button>
                            <button>delete</button>
                        </div>

                    </div>
                ));
                setCompanies(fetchingData);
            });
    }, []);

    return <div>{companies}</div>;

    }