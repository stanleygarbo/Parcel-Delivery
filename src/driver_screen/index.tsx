import React, { useContext, useEffect } from 'react';
import './driverScreen.css';
import Jobs from '../components/jobs/Jobs';
import Profile from '../components/profile/Profile';
import WorkCard from '../components/cards/WorkCard';
import AccountBalanceCard from '../components/cards/AccountBalanceCard';
import { AuthContext } from '../contexts/AuthContextProvider';
import { useQuery } from 'react-query';
import { getOnGoingDelivery } from '../firebase_functions/getOnGoingDelivery';
import { LoadingContext } from '../contexts/LoadingContextProvider';

const dummyData = [
    {
        id:'1',
        title:'Sample Data 1',
        pickupAddress:'Somewhere, nowhere',
        deliveryAddress:'nowhere somewhere',
        contact:'0219389213',
        price:15,
        fragile:true
    },
    {
        id:'2',
        title:'2nd Sample Data',
        pickupAddress:'Somewhere, nowhere',
        deliveryAddress:'nowhere somewhere',
        contact:'0219389213',
        price:15,
        fragile:true
    },
];

export default function(){
    const {userType} = useContext(AuthContext);
    const {setIsLoading} = useContext(LoadingContext);
    const {status,data} = useQuery('on going jobs',getOnGoingDelivery);

    useEffect(()=>{
        if(status === 'loading'){
            setIsLoading(true);
        }else{
            setIsLoading(false);
        }
    },[status,setIsLoading])
    
    return(
        <div className='driver__screen'>
            <div className="column">
                <Profile 
                    contact={userType.contact} 
                    name={userType.name} 
                    onGoingDelivery={userType.onGoingDelivery} 
                    parcelsDelivered={userType.parcelsDelivered} 
                    reviews={userType.reviews} />
                <AccountBalanceCard/>
            </div>
            <div className="column second">
                <WorkCard />
                <Jobs jobs={data!} title='Ongoing Jobs' />
                <Jobs jobs={dummyData} title='Finished Jobs' />
            </div>
        </div>
    );
};