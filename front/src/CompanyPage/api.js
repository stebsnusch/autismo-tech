import { highlitedCompanies as COMPANIES } from '../Home/api';

export const getCompany = (companyId) => {
    let  i = 0
    let currentCompany = {};
    console.log(companyId);

    while(i < COMPANIES.length) {
        console.log(i);
        console.log(COMPANIES[i].id);
        if(COMPANIES[i].id == companyId) {
            currentCompany = COMPANIES[i];
            break;
        }
        i++;
    }

    return currentCompany;
}