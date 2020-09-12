import React from 'react';
import './profile.css';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

interface Props {
    name:string;
    parcelsDelivered?:number;
    reviews?:number;
    contact:string;
    onGoingDelivery?:string;
}

const Profile:React.FC <Props> = ({name,parcelsDelivered,reviews,contact,onGoingDelivery}) => {
    const history = useHistory();

    return (
        <div className='profile__container'>
            <header>
                <p className='name'>{name}</p>
                {parcelsDelivered && <p>Parcels Delivered: {parcelsDelivered}</p>}
                {
                    reviews && 
                    <p>
                        {Array(Math.floor(reviews)).fill('').map((_,index)=><span key={index}>&#9733; </span>)}
                        ({reviews} reviews)
                    </p>
                }
            </header>
            <div className="info" >
                <Button onClick={()=>{history.push('/edit-profile')}} color='secondary' variant='contained' >Edit Profile</Button>
                <p>Contact No.: <span>{contact}</span></p>
                {onGoingDelivery && <p>Ongoing Delivery: <span> {onGoingDelivery.length}</span></p>}
            </div>
        </div>
    );
};

export default Profile;
