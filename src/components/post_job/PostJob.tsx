import React,{useState} from 'react';
import './postJob.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LinearProgress from '@material-ui/core/LinearProgress';
import {postJob} from '../../firebase_functions/postJob';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    linearProgress:{
        position:'absolute',
        left:0,
        top:0,
        width:'100%',
        margin:0,
    }   
}));

const PostJob:React.FC = () => {
    const [isLoading,setIsLoading] = useState<boolean>(false);

    const [input,setInput] = useState({
        title:'',
        pickupAddress:'',
        deliveryAddress:'',
        contact:'',
        price:0,
        isFragile:false,
        acceptedBy:'none'
    });
    const classes = useStyles();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value || e.target.checked,
        });
    };

    const formSubmitted = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        await postJob(input);
        setIsLoading(false);
        setInput({
            title:'',
            pickupAddress:'',
            deliveryAddress:'',
            contact:'',
            price:0,
            isFragile:false,
            acceptedBy:'none'
        });
    };

    return (
        <form onSubmit={formSubmitted} className={classes.root}>
            {isLoading && <LinearProgress className={classes.linearProgress} />}
            <TextField required onChange={handleChange} value={input.title} name='title' autoComplete='off' id="standard-basic" label="Title" />
            <TextField required onChange={handleChange} value={input.pickupAddress} name='pickupAddress' autoComplete='off' id="standard-basic" label="Pickup Address" />
            <TextField required onChange={handleChange} value={input.deliveryAddress} name='deliveryAddress' autoComplete='off' id="standard-basic" label="Delivery Address" />
            <TextField required onChange={handleChange} value={input.contact} name='contact' autoComplete='off' id="standard-basic" label="Contact" />
            <FormControl>
                <InputLabel htmlFor="input-with-icon-adornment">Price</InputLabel>
                <Input
                    required
                    onChange={handleChange} 
                    value={input.price} 
                    name='price'
                    id="input-with-icon-adornment"
                    type='number'
                    startAdornment={
                        <InputAdornment position="start">
                            <MonetizationOnIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControlLabel
                control={
                    <Checkbox 
                        checked={input.isFragile} 
                        onChange={handleChange} 
                        name="isFragile" 
                        color='primary'
                    />
                }
                label="Fragile"
            />
            <Button disabled={isLoading} variant='contained' color='primary' type='submit'>POST JOB</Button>
        </form>
    );
};

export default PostJob;
