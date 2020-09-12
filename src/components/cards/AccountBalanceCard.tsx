import React from 'react';
import './cards.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {useHistory} from 'react-router-dom';

const AccountBalanceCard:React.FC = () => {
    const history = useHistory();

    return (
        <div className='account__balance__card'>
            <header>
                <h2>Account Balance</h2>
            </header>
            <div className="card__body">
                <div className="balance">$0 USD</div>
                <div className="card__buttons">
                    <Button onClick={()=>history.push('/deposit')} variant='contained' color='primary' ><AddIcon/> Deposit</Button>
                </div>
            </div>
        </div>
    );
};

export default AccountBalanceCard;
