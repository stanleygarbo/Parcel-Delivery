import React,{useContext,useEffect} from 'react';
import Nav from './components/nav/Nav';
import {Switch, Route, Redirect} from 'react-router-dom';
import DriverScreen from './driver_screen';
import { AuthContext } from './contexts/AuthContextProvider';
import EmployerScreen from './employer_screen';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import AvailableJobs from './driver_screen/AvailableJobs';
import PostJob from './components/post_job/PostJob';
import Deposit from './components/payment/Deposit';
import {firestore} from './firebaseConfig';
import LinearProgress from '@material-ui/core/LinearProgress';
import { LoadingContext } from './contexts/LoadingContextProvider';
import EditProfile from './components/edit_profile.tsx/EditProfile';

const useStyles = makeStyles({
  linearProgress:{
      position:'absolute',
      top:0,
      left:0,
      width:'100%',
      zIndex:5
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(35, 207, 72)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#222',
      contrastText: '#fff',
    },
  },
});

const App:React.FC = () => {
  const classes = useStyles();
  const {userType,setUserType} = useContext(AuthContext);
  const {isLoading} = useContext(LoadingContext);

  useEffect(()=>{
    firestore.collection('userTypes').doc('driver').get()
    .then((doc)=>{
      setUserType(doc.data()!)
    });
  },[setUserType]);

  return (
    <ThemeProvider theme={theme}>
      <div className='root'>
        {isLoading && <LinearProgress className={classes.linearProgress} />}
        {userType.userType && 
          <div className="App">
            <Nav />
            <Switch>
              <Route path='/dashboard' render={()=> userType.userType === 'driver' ?<DriverScreen/>:<EmployerScreen />}/>
              {userType.userType === 'driver' ? 
                <Route path='/available-jobs' component={AvailableJobs} />
                :
                <Route path='/post-job' component={PostJob} />
              }
              <Route path='/deposit' component={Deposit} />
              <Route path='/edit-profile' component={EditProfile} />
              <Route exact path='/'>
                {userType.userType && <Redirect to='/dashboard'/>}
              </Route>
              <Route>
                <Redirect to='/dashboard'/>
              </Route>
            </Switch>
          </div>
        }
      </div>
    </ThemeProvider>
  );
};

export default App;
