import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './cards.css';
import {Params} from '../commercial_vessel/CommercialVessel'

const useStyles = makeStyles((theme) => ({
    root: {
        width:370,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input:{
        height:40
    }
}));

interface Props {
    setState:React.Dispatch<React.SetStateAction<undefined | Params>>
}

const FilterCard:React.FC<Props> = ({setState}) => {
    const classes = useStyles();

    const [inputted,setInputted] = useState<Params>({
        portCode:'',
        vesselStatus:'',
        arrivalDateFrom:'',
        arrivalDateTo:'',
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setInputted({
            ...inputted,
            [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setState(inputted);
    };

    return (
        <form onSubmit={handleSubmit} className={`${classes.root} filter__card`}>
            <h2>Filters</h2>
            <TextField onChange={handleChange} value={inputted.portCode} name='portCode' id="outlined-basic" label="Port Code" variant="outlined" />
            <TextField onChange={handleChange} value={inputted.vesselStatus} name='vesselStatus' id="outlined-basic" label="vessel Status" variant="outlined" />
            <TextField onChange={handleChange} value={inputted.arrivalDateFrom} name='arrivalDateFrom' id="outlined-basic" label="Arrival Date From" variant="outlined" />
            <TextField onChange={handleChange} value={inputted.arrivalDateTo} name='arrivalDateTo' id="outlined-basic" label="Arrival Date To" variant="outlined" />
            <Button variant='contained' type='submit' color='primary' >Apply Filters</Button>
        </form>
    );
};

export default FilterCard;
