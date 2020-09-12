import React,{useState} from 'react';
import './deposit.css'
import CreditCardInput from 'react-credit-card-input';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    FormControl:{
        marginBottom:30,
    },
    Button:{
        marginTop:30,
    }
});

const Deposit = () => {
    const classes = useStyles();
    const [amount,setAmount] = useState<number>(0);

    const amountOnChange = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        if(Number(e.target.value) >= 0)
        setAmount(Number(e.target.value));
    };

    return (
        <form>
            <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="input-with-icon-adornment">Amount</InputLabel>
                <Input
                    onChange={amountOnChange} 
                    value={amount}
                    id="input-with-icon-adornment"
                    type='number'
                    startAdornment={
                        <InputAdornment position="start">
                            <MonetizationOnIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <CreditCardInput className='cred'/>
            <Button disabled={amount<=0} className={classes.Button} color='primary' variant='contained' >Confirm and Pay ${amount}</Button>
        </form>
    );
};

export default Deposit;
