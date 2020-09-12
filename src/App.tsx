import React,{useContext,useEffect} from 'react';
import Nav from './components/nav/Nav';
import {Switch, Route, Redirect} from 'react-router-dom';
import DriverScreen from './driver_screen';
import { AuthContext } from './contexts/AuthContextProvider';
import EmployerScreen from './employer_screen';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AvailableJobs from './driver_screen/AvailableJobs';
import PostJob from './components/post_job/PostJob';
import Deposit from './components/payment/Deposit';
import {firestore} from './firebaseConfig';

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
  const {userType,setUserType} = useContext(AuthContext);

  useEffect(()=>{
    firestore.collection('userTypes').doc('driver').get()
    .then((doc)=>{
      setUserType(doc.data()!)
    });
  },[]);

  return (
    <ThemeProvider theme={theme}>
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
            <Route exact path='/'>
              {userType.userType && <Redirect to='/dashboard'/>}
            </Route>
            <Route>
              <Redirect to='/dashboard'/>
            </Route>
          </Switch>
        </div>
      }
    </ThemeProvider>
  );
};

export default App;
