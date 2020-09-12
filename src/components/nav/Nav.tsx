import React, { useContext,useState, useEffect } from 'react';
import './nav.css';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { NavLink,Redirect } from 'react-router-dom';
import { firestore } from '../../firebaseConfig';
import { LoadingContext } from '../../contexts/LoadingContextProvider';

const Nav:React.FC = () => {
    const {userType,setUserType} = useContext(AuthContext);
    const {isLoading,setIsLoading} = useContext(LoadingContext);
    const [renderRedirect,setRenderRedirect] = useState<string>(userType.userType);
  
    useEffect(()=>{
      setRenderRedirect(userType.userType)
    },[userType]);

    const UserTypeChanged = async (e:React.ChangeEvent<HTMLSelectElement>) =>{
        let valueSelected = e.target.value;
        setIsLoading(true);
        const res = await firestore.collection('userTypes').doc(valueSelected).get();
        setIsLoading(false);
        let user = res.data()
        user!.id = res.id 
        setUserType(user!)
    };

    const activeLinkStyle = {
        color:'rgb(35, 207, 72)',
        borderBottom: '3px solid rgb(35, 207, 72)',
        fontWeight:700,
    };

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/dashboard' activeStyle={activeLinkStyle}>Dashboard</NavLink>
                </li>
                {userType.userType === 'driver' ?
                    <li>
                        <NavLink to='/available-jobs' activeStyle={activeLinkStyle}>Available Jobs</NavLink>
                    </li>
                    :
                    <li>
                        <NavLink to='/post-job' activeStyle={activeLinkStyle}>Post Job</NavLink>
                    </li>
                }
            </ul>
            <select disabled={isLoading} className={`${isLoading && 'disabled'}`} onChange={UserTypeChanged} value={userType.userType}>
                <option value="driver">Driver</option>
                <option value="employer">Employer</option>
            </select>
          {renderRedirect === 'employer' && <Redirect to='/dashboard'/>}
          {renderRedirect === 'driver' && <Redirect to='/dashboard'/>}

        </nav>
    );
};

export default Nav;
