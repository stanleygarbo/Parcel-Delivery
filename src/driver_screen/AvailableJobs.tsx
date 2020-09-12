import React from 'react';
import Jobs from '../components/jobs/Jobs';
import { useQuery } from 'react-query';
import { getAvailableJobs } from '../firebase_functions/getAvailableJobs';

const AvailableJobs:React.FC = () => {

    const {status, data} = useQuery('jobs',getAvailableJobs);

    return (
        <div className='available__jobs__container'>
            {data && <Jobs title='Available Jobs' jobs={data} />}
        </div>
    );
};

export default AvailableJobs;
