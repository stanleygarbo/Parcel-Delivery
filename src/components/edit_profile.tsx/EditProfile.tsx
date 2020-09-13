import React,{useState} from 'react';
import './editProfile.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

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

interface inputs{
    name:string;
    contact:string;
}

const EditProfile:React.FC = () => {
    const [isLoading,setIsLoading] = useState<boolean>(false);
    // i had to seperate isFragile because it was the only way i could fix a weird bug
    const [input,setInput] = useState<inputs>({
        name:'',
        contact:'',
    });
    const classes = useStyles();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        });

    };

    const formSubmitted = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //make an obj to store all the inputted data 
        //clear the form
        setIsLoading(true);
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 1000)
        });
        await promise; 
        setIsLoading(false);
        setInput({
            name:'',
            contact:'',
        });
    };

    return (
        <form onSubmit={formSubmitted} className={classes.root}>
            {isLoading && <LinearProgress className={classes.linearProgress} />}
            <TextField onChange={handleChange} value={input.name} name='name' autoComplete='off' id="standard-basic" label="Name" />
            <TextField onChange={handleChange} value={input.contact} name='contact' autoComplete='off' id="standard-basic" label="Contact" />
            <Button disabled={isLoading} variant='contained' color='primary' type='submit'>Confirm change</Button>
        </form>
    );
};

export default EditProfile;
