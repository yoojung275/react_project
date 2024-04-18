import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import UserInfoContext from '../../../member/modules/UserInfoContext';

const MemberOnly = ({ children }) => {
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  return isLogin ? children : <Navigate to="/member/login" replace={true} />;
};

export default React.memo(MemberOnly);
