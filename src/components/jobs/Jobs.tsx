import React,{useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import './jobs.css';
import { AuthContext } from '../../contexts/AuthContextProvider';

const useStyles=makeStyles({
    icon:{
        fontSize:19
    },
    deleteButton:{
        position:'absolute',
        top:15,
        right:15,
    }
});

interface Props {
    jobs:firebase.firestore.DocumentData[];
    title:string;
}

const Jobs:React.FC<Props> = ({jobs,title}) => {
    const {userType} = useContext(AuthContext);
    const [posts,setPosts] = useState<Props['jobs']>();
    const classes=useStyles();

    useEffect(()=>{
        setPosts(jobs);
    },[jobs]);

    //a function that will truncate a string if greater than the given arg(n)
    const truncate = (str:string, n:number) => {
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
    };

    //remove an item in the array(post)
    const deletePost = (index:number) => {
        //filters out the clicked item of the array and returns a new array
        let newPosts = posts?.filter((_,i)=>i!==index);
        setPosts(newPosts);
    };

    return (
            <div className="job__container">
                
            <h2>{posts?.length===0 && 'No '}{title}</h2>
            {posts?.map((job,index)=>
                <div className='job' key={job.id}>
                    {userType.userType ==='employer' && 
                        (<IconButton onClick = {()=>deletePost(index)} className={classes.deleteButton}>
                            <DeleteIcon/>
                        </IconButton>)
                    }
                    <h2>{truncate(job.title,20)}</h2>
                    <p>Pickup: <span>{job.pickupAddress}</span></p>
                    <p>To be delivered at: <span>{job.deliveryAddress}</span></p>
                    <p>Contact: <span>{job.contact}</span></p>
                    {job.fragile && <p><span>Fragile</span></p>}
                    {job.price && <p><span>${job.price}</span></p>}
                    {userType.userType ==='driver' && 
                        (<Button onClick = {()=>deletePost(index)} variant='contained' color='primary' >ACCEPT JOB</Button>)
                    }
                </div>
            )}
        </div>
    );
};

export default Jobs;
