import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const UserProfile = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      {
        user && <p>{user?. displayName}</p>
      }
      {
        user && <img src={user?. photoURL} alt="" />
      }
    </div>
  );
};

export default UserProfile;