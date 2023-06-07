import s from './Company.module.css'
import {useEffect, useState} from "react";


export const Company = () => {
    const [companies, setCompanies] = useState()
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/companies.json')
            .then(response => response.json())
            .then(data=>{
                setCompanies(data)
                console.log(data)
            })
    },[])



    return(
        <div>
            <button>Click</button>
        </div>
    )
    }