import React, { useContext } from 'react';
import './driverScreen.css';
import Jobs from '../components/jobs/Jobs';
import Profile from '../components/profile/Profile';
import WorkCard from '../components/cards/WorkCard';
import AccountBalanceCard from '../components/cards/AccountBalanceCard';
import { AuthContext } from '../contexts/AuthContextProvider';

const dummyData = [
    {
        id:'1',
        title:'sad sh shakd sakljdlsaj jdlska jlksaj ldk',
        pickupAddress:'Somewhere, nowhere',
        deliveryAddress:'nowhere somewhere',
        contact:'0219389213',
        fragile:true
    },
    {
        id:'2',
        title:'sad sh shakd sakljdlsaj jdlska jlksaj ldk',
        pickupAddress:'Somewhere, nowhere',
        deliveryAddress:'nowhere somewhere',
        contact:'0219389213',
        fragile:true
    },
    {
        id:'3',
        title:'sad sh shakd sakljdlsaj jdlska jlksaj ldk',
        pickupAddress:'Somewhere, nowhere',
        deliveryAddress:'nowhere somewhere',
        contact:'0219389213',
        fragile:true
    },
];

export default function(){
    const {userType} = useContext(AuthContext);
    
    return(
        <div className='driver__screen'>
            <div className="column">
                <Profile 
                    contact={userType.contact} 
                    name={userType.name} 
                    onGoingDelivery={userType.onGoingDelivery} 
                    parcelsDelivered={userType.parcelsDelivered} 
                    reviews={userType.reviewa} />
                <AccountBalanceCard/>
            </div>
            <div className="column second">
                <WorkCard />
                <Jobs jobs={dummyData} title='Ongoing Jobs' />
                <Jobs jobs={dummyData} title='Finished Jobs' />
            </div>
        </div>
    );
};