import React from 'react';
import './employerScreen.css';
import Profile from '../components/profile/Profile';
import AccountBalanceCard from '../components/cards/AccountBalanceCard';
import Jobs from '../components/jobs/Jobs';
import { useQuery } from 'react-query';
import {getPostedJobs} from '../firebase_functions/getPostedJobs';

export default function () {
    const {data} = useQuery('posted Jobs',getPostedJobs);

    return (
        <div className='employer__screen'>
            <div className='column'>
                <Profile  contact='09162321332' name='Jane Doe' />
                <AccountBalanceCard />
            </div>
            <div className='column second__col'>
                {data && <Jobs jobs={data} title = 'Posted Jobs'/>}
            </div>
        </div>
    );
};
