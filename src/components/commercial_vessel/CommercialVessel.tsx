import React,{useEffect, useState} from 'react';
import FilterCard from '../cards/FilterCard';

export interface Params {
    portCode:string,
    vesselStatus:string,
    arrivalDateFrom:string,
    arrivalDateTo:string,
}

const CommercialVessel:React.FC = () => {
    const [params,setParams] = useState<Params>();
    const [apiEndpoint,setApiEndpoint] = useState<string>();
    const url='https://api.portconnect.io/v1/scheduled-vessels?vesselType=COMMERCIAL';

    useEffect(()=>{
        const portCode = params?.portCode && '&portCode='+params?.portCode;
        const vesselStatus = params?.vesselStatus && '&vesselStatus='+params?.vesselStatus;
        const arrivalDateFrom = params?.arrivalDateFrom && '&arrivalDateFrom='+params?.arrivalDateFrom;
        const arrivalDateTo = params?.arrivalDateTo && '&arrivalDateTo='+params?.arrivalDateTo;
        setApiEndpoint(url+portCode+vesselStatus+arrivalDateFrom+arrivalDateTo);
    },[params])

    return (
        <div className='container'>
            {console.log(apiEndpoint)}
            <FilterCard setState = {setParams}/>
        </div>
    );
};

export default CommercialVessel;
