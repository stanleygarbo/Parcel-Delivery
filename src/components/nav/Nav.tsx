import React, { useContext,useState, useEffect } from 'react';
import './nav.css';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { NavLink,Redirect } from 'react-router-dom';

const Nav:React.FC = () => {
    const {userType,setUserType} = useContext(AuthContext);
    const [renderRedirect,setRenderRedirect] = useState<string>(userType);
  
    useEffect(()=>{
      console.log(userType)
      setRenderRedirect(userType)
    },[userType]);

    const UserTypeChanged = (e:React.ChangeEvent<HTMLSelectElement>):void =>{
        setUserType(e.target.value)
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
                {userType === 'driver' ?
                    <li>
                        <NavLink to='/available-jobs' activeStyle={activeLinkStyle}>Available Jobs</NavLink>
                    </li>
                    :
                    <li>
                        <NavLink to='/post-job' activeStyle={activeLinkStyle}>Post Job</NavLink>
                    </li>
                }
            </ul>
            <select onChange={UserTypeChanged} value={userType}>
                <option value="driver">Driver</option>
                <option value="employer">Employer</option>
            </select>
          {renderRedirect === 'employer' && <Redirect to='/dashboard'/>}
          {renderRedirect === 'driver' && <Redirect to='/dashboard'/>}

        </nav>
    );
};

export default Nav;
