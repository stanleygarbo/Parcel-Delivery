import React,{useContext, useEffect} from 'react';
import Jobs from '../components/jobs/Jobs';
import { useQuery } from 'react-query';
import { getAvailableJobs } from '../firebase_functions/getAvailableJobs';
import { LoadingContext } from '../contexts/LoadingContextProvider';

const AvailableJobs:React.FC = () => {
    const {status, data} = useQuery('jobs',getAvailableJobs);
    const {setIsLoading} = useContext(LoadingContext);
    
    useEffect(()=>{
        if(status==='loading'){
            setIsLoading(true)
        }
        else{
            setIsLoading(false)
        }
    },[status,setIsLoading]);

    return (
        <div className='available__jobs__container'>
            {data && <Jobs title='Available Jobs' jobs={data} />}
        </div>
    );
};

export default AvailableJobs;
