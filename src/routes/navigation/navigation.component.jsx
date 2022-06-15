import { Link, Outlet } from "react-router-dom";

import {ReactComponent as Logo} from '../../assests/logo.svg'

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/">
          <Logo />
        </Link>

        <div>
          <Link to="/shop">Shop</Link>
        </div>
        <Outlet />
      </div>
    
    </>
  );
};

export default Navigation;
