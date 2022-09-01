import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../components/button/Button';
import logOut from '../../../firefly/actions/logOut';

const AccountTab = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        type="Secondary"
        onClick={() =>
          logOut().then(() => {
            navigate(`/`);
            window.location.reload();
          })
        }
      >
        Logout
      </Button>
    </div>
  );
};

export default AccountTab;
